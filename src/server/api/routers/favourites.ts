import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "30 s"),
  analytics: true,
});

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
        recipeId: z.number(),
        rating: z.number().optional(),
        completed: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;
      const recipeId = input.recipeId;

      const { success } = await ratelimit.limit(userId);
      if (!success) throw new TRPCError({ code: "TOO_MANY_REQUESTS" });

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
    .input(z.object({ recipeId: z.number() }))
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
            recipeId: input.recipeId,
          },
        },
      });

      return favourite;
    }),
});
