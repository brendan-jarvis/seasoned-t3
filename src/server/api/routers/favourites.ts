import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const favouritesRouter = createTRPCRouter({
  getAll: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;

    if (!userId) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to view your favourites",
      });
    }

    const favourites = await ctx.prisma.favourite.findMany({
      where: { userId },
      include: { recipe: true },
    });

    return favourites;
  }),

  addOrUpdateOne: privateProcedure
    .input(
      z.object({
        recipeId: z.string(),
        rating: z.number().optional(),
        completed: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;
      const recipeId = Number(input.recipeId);

      if (!userId) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You must be logged in to add or edit a favourite",
        });
      }

      if (!recipeId) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You must provide a recipe id",
        });
      }

      const favourite = await ctx.prisma.favourite.upsert({
        where: {
          userId_recipeId: {
            userId,
            recipeId,
          },
        },
        create: {
          userId: userId,
          recipeId: recipeId,
          rating: input.rating,
          completed: input.completed,
        },
        update: {
          rating: input.rating,
          completed: input.completed,
        },
      });

      return favourite;
    }),

  deleteOne: privateProcedure
    .input(z.object({ recipeId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;

      if (!userId) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You must be logged in to delete a favourite",
        });
      }

      const favourite = await ctx.prisma.favourite.delete({
        where: {
          userId_recipeId: {
            userId,
            recipeId: Number(input.recipeId),
          },
        },
      });

      return favourite;
    }),
});
