import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const seasonalityRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const cachedAllProduceSeasonality = await redis.get("seasonality/getAll");

    if (cachedAllProduceSeasonality) {
      return cachedAllProduceSeasonality;
    }

    const allProduceSeasonality = await ctx.prisma.seasonality.findMany({
      // take: 10,
      orderBy: {
        name: "asc",
      },
    });

    await redis.set(
      "seasonality/getAll",
      JSON.stringify(allProduceSeasonality),
      {
        ex: 43200, // 12 hours
      }
    );

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

      const cachedSeasonality = await redis.get(
        `seasonality/getOne?name=${name}`
      );

      if (cachedSeasonality) {
        return cachedSeasonality;
      }

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

      await redis.set(
        `seasonality/getOne?name=${name}`,
        JSON.stringify(seasonality),
        {
          ex: 43200, // 12 hours
        }
      );

      return seasonality;
    }),

  getAllByMonth: publicProcedure
    .input(
      z.object({
        month: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const cachedAllProduce = await redis.get(
        `seasonality/getAllByMonth?month=${input.month}`
      );

      if (cachedAllProduce) {
        return cachedAllProduce;
      }

      const allProduce = await ctx.prisma.seasonality.findMany({
        where: {
          [input.month]: "Available",
        },
        orderBy: { name: "asc" },
        include: {
          Produce: true,
        },
      });

      await redis.set(
        `seasonality/getAllByMonth?month=${input.month}`,
        JSON.stringify(allProduce),
        {
          ex: 43200, // 12 hours
        }
      );

      return allProduce;
    }),
});
