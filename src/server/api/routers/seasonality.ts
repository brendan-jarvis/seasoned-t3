import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  privateProcedure,
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
});
