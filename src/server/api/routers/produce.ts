import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import { Redis } from "@upstash/redis";

const availabilityType = z.enum([
  "Available",
  "Limited",
  "Unavailable",
  "Imported",
  "LimitedImported",
]);

const redis = Redis.fromEnv();

export const produceRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const cachedAllProduce = await redis.get("produce/getAll");

    if (cachedAllProduce) {
      return cachedAllProduce;
    }

    const allProduce = await ctx.prisma.produce.findMany({
      take: 10,
      orderBy: { id: "asc" },
      include: { seasonality: true, availability: true },
    });

    await redis.set("produce/getAll", JSON.stringify(allProduce), {
      ex: 43200, // 12 hours
    });

    return allProduce;
  }),

  getAllByMonth: publicProcedure
    .input(
      z.object({
        month: z.enum([
          "january",
          "february",
          "march",
          "april",
          "may",
          "june",
          "july",
          "august",
          "september",
          "october",
          "november",
          "december",
        ]),
        seasonality: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const allProduce = await ctx.prisma.produce.findMany({
        where: {
          seasonality: {
            [input.month]: "Available",
          },
        },
        orderBy: { type: "asc" },
        include: { seasonality: true, availability: true },
      });

      return allProduce;
    }),

  create: privateProcedure
    .input(
      z.object({
        title: z.string(),
        type: z.enum([
          "Vegetable",
          "SpecialtyVegetable",
          "Fruit",
          "Berry",
          "StoneFruit",
          "SpecialtyFruit",
          "Herb",
        ]),
        description: z.string().optional(),
        image: z.string().optional(),
        seasonality: z.object({
          name: z.string(),
          january: z.enum(["Available", "Unavailable"]),
          february: z.enum(["Available", "Unavailable"]),
          march: z.enum(["Available", "Unavailable"]),
          april: z.enum(["Available", "Unavailable"]),
          may: z.enum(["Available", "Unavailable"]),
          june: z.enum(["Available", "Unavailable"]),
          july: z.enum(["Available", "Unavailable"]),
          august: z.enum(["Available", "Unavailable"]),
          september: z.enum(["Available", "Unavailable"]),
          october: z.enum(["Available", "Unavailable"]),
          november: z.enum(["Available", "Unavailable"]),
          december: z.enum(["Available", "Unavailable"]),
        }),
        availability: z.object({
          january: availabilityType,
          february: availabilityType,
          march: availabilityType,
          april: availabilityType,
          may: availabilityType,
          june: availabilityType,
          july: availabilityType,
          august: availabilityType,
          september: availabilityType,
          october: availabilityType,
          november: availabilityType,
          december: availabilityType,
        }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const produce = await ctx.prisma.produce.create({
        data: {
          authorId,
          title: input.title,
          type: input.type,
          description: input.description,
          image: input.image,
          seasonality: {
            connectOrCreate: {
              where: {
                name: input.seasonality.name,
              },
              create: input.seasonality,
            },
          },
          availability: {
            create: input.availability,
          },
        },
      });

      return produce;
    }),
});
