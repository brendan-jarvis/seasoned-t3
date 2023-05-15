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

  create: privateProcedure
    .input(
      z.object({
        title: z.string(),
        serves: z.string(),
        prepTime: z.string(),
        cookTime: z.string(),
        totalTime: z.string(),
        sourceURL: z.string().url({ message: "Invalid recipe source url" }),
        description: z.string(),
        smallImage: z.string().url({ message: "Invalid small image url" }),
        mediumImage: z.string().url({ message: "Invalid medium image url" }),
        largeImage: z.string().url({ message: "Invalid large image url" }),
        ingredientSegments: z.array(
          z.object({
            title: z.string(),
            ingredients: z.array(
              z.object({
                amount: z.string(),
                unit: z.string(),
                name: z.string(),
              })
            ),
          })
        ),
        instructions: z.array(
          z.object({ title: z.string(), content: z.string() })
        ),
        // TODO: Implement tags
        // tags: z.array(z.object({ name: z.string() })),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const recipe = await ctx.prisma.recipe.create({
        data: {
          authorId,
          title: input.title,
          serves: input.serves,
          prepTime: input.prepTime,
          cookTime: input.cookTime,
          totalTime: input.totalTime,
          sourceURL: input.sourceURL,
          description: input.description,
          smallImage: input.smallImage,
          mediumImage: input.mediumImage,
          largeImage: input.largeImage,
          ingredientSegments: {
            create: input.ingredientSegments.map((segment) => ({
              title: segment.title,
              ingredients: {
                create: segment.ingredients.map((ingredient) => ({
                  amount: ingredient.amount,
                  unit: ingredient.unit,
                  name: ingredient.name,
                })),
              },
            })),
          },
          instructions: {
            create: input.instructions.map((instruction) => ({
              title: instruction.title,
              content: instruction.content,
            })),
          },
          // TODO: Implement tags
          //   tags: {
          //     connectOrCreate: {
          //       where: input.tags.map((tag) => ({ name: tag.name })),
          //       create: input.tags.map((tag) => ({ name: tag.name })),
          //   },
          // },
        },
      });

      return recipe;
    }),
});
