import clerkClient from "@clerk/clerk-sdk-node";
import { z } from "zod";
import type { User } from "@clerk/nextjs/dist/api";
import type { Recipe } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const recipesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const allRecipes = await ctx.prisma.recipe.findMany({
      take: 10,
      orderBy: { id: "asc" },
      include: {
        ingredientSegments: {
          include: {
            ingredients: { select: { amount: true, unit: true, name: true } },
          },
        },
        instructions: { select: { title: true, content: true } },
        tags: true,
      },
    });

    return allRecipes;
  }),
});
