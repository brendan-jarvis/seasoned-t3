import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const seasonalityRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const allProduceSeasonality = await ctx.prisma.seasonality.findMany({
      // take: 10,
      orderBy: {
        name: "asc",
      },
    });

    return allProduceSeasonality;
  }),

  getOne: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { name } = input;

      const seasonality = await ctx.prisma.seasonality.findUnique({
        where: {
          name: name,
        },
        include: {
          Produce: {
            include: {
              availability: true,
            },
          },
          Price: true,
        },
      });

      if (!seasonality) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Seasonality not found",
        });
      }

      return seasonality;
    }),

  getAllByMonth: publicProcedure
    .input(
      z.object({
        month: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const allProduce = await ctx.prisma.seasonality.findMany({
        where: {
          [input.month]: "Available",
        },
        orderBy: { name: "asc" },
        include: {
          Produce: true,
        },
      });

      return allProduce;
    }),
});
