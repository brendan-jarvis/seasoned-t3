import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

// import { Redis } from "@upstash/redis";

// const redis = Redis.fromEnv();

export const recipesRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        limit: z.optional(z.number()),
        offset: z.optional(z.number()),
      })
    )
    .query(async ({ ctx, input }) => {
      // const cachedRecipes: string | null = await redis.get(
      //   `recipes/getAll?limit=${String(input.limit)}&offset=${String(
      //     input.offset
      //   )}`
      // );

      // if (cachedRecipes) {
      //   return cachedRecipes;
      // }

      const allRecipes = await ctx.prisma.recipe.findMany({
        take: input.limit || 10,
        skip: input.offset || 0,
        orderBy: { id: "asc" },
        include: {
          ingredientSegments: {
            include: {
              ingredients: { select: { content: true } },
            },
          },
          instructions: { select: { title: true, content: true } },
          tags: true,
        },
      });

      const count = await ctx.prisma.recipe.count();

      // await redis.set(
      //   `recipes/getAll&offset=${String(input.offset)}&limit=${String(
      //     input.limit
      //   )}`,
      //   JSON.stringify({ allRecipes, count }),
      //   { ex: 600 } // 10 minutes
      // );

      return { allRecipes, count };
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    // convert string to number
    .query(async ({ ctx, input }) => {
      // const cachedRecipe: string | null = await redis.get(
      //   `recipes/getOne?id=${input.id}`
      // );

      // if (cachedRecipe) {
      //   return cachedRecipe;
      // }

      const recipe = await ctx.prisma.recipe.findUnique({
        where: { id: Number(input.id) },
        include: {
          ingredientSegments: {
            include: {
              ingredients: { select: { content: true } },
            },
          },
          instructions: { select: { title: true, content: true } },

          tags: true,
        },
      });

      if (!recipe) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Recipe not found" });
      }

      // await redis.set(`recipes/getOne?id=${input.id}`, JSON.stringify(recipe), {
      //   ex: 43200, // 12 hours
      // });

      return recipe;
    }),

  findMany: publicProcedure
    .input(
      z.object({
        query: z.string().min(3),
        limit: z.optional(z.number()),
        offset: z.optional(z.number()),
        searchType: z.optional(z.string()),
        unsorted: z.optional(z.boolean()),
      })
    )
    .query(async ({ ctx, input }) => {
      const operator = input.searchType === "all" ? "&" : "|";
      const ingredients = input.query.split(/[,\s]+/).join(` ${operator} `); // Split query on spaces or commas

      // const cachedRecipes: string | null = await redis.get(
      //   `recipes/findMany?query=${input.query}&limit=${String(
      //     input.limit
      //   )}&offset=${String(input.offset)}&searchType=${String(
      //     input.searchType
      //   )}`
      // );

      // if (cachedRecipes) {
      //   return cachedRecipes;
      // }

      const recipes = await ctx.prisma.recipe.findMany({
        take: input.limit || 10,
        skip: input.offset || 0,
        // orderBy: { id: "asc" },
        orderBy: input.unsorted ? undefined : { id: "asc" },
        where: {
          OR: [
            { title: { search: ingredients } },
            {
              ingredientSegments: {
                some: {
                  ingredients: {
                    some: {
                      content: { search: ingredients },
                    },
                  },
                },
              },
            },
            {
              tags: {
                some: {
                  name: { search: ingredients },
                },
              },
            },
          ],
        },
        include: {
          ingredientSegments: {
            include: {
              ingredients: { select: { content: true } },
            },
          },
          instructions: { select: { title: true, content: true } },
          tags: true,
        },
      });

      const count = await ctx.prisma.recipe.count({
        where: {
          OR: [
            { title: { search: ingredients } },
            {
              ingredientSegments: {
                some: {
                  ingredients: {
                    some: {
                      content: { search: ingredients },
                    },
                  },
                },
              },
            },
            {
              tags: {
                some: {
                  name: { search: ingredients },
                },
              },
            },
          ],
        },
      });

      if (!recipes) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No matching recipes found",
        });
      }

      // await redis.set(
      //   `recipes/findMany?query=${input.query}&limit=${String(
      //     input.limit
      //   )}&offset=${String(input.offset)}&searchType=${String(
      //     input.searchType
      //   )}`,
      //   JSON.stringify({ recipes, count }),
      //   { ex: 43200 } // 12 hours
      // );

      return { recipes, count };
    }),

  create: privateProcedure
    .input(
      z.object({
        title: z.string().min(5).max(100),
        serves: z.optional(z.string()),
        prepTime: z.optional(z.string()),
        cookTime: z.optional(z.string()),
        totalTime: z.optional(z.string()),
        sourceURL: z.optional(
          z.union([
            z.string().url({ message: "Invalid source url" }).nullish(),
            z.literal(""),
          ])
        ),
        description: z.optional(z.string()),
        image: z.optional(
          z.union([
            z.string().url({ message: "Invalid image url" }).nullish(),
            z.literal(""),
          ])
        ),
        ingredientSegments: z
          .array(
            z.object({
              title: z.string(),
              ingredients: z.array(
                z.object({
                  content: z.string(),
                })
              ),
            })
          )
          .nonempty(),
        instructions: z
          .array(z.object({ title: z.string(), content: z.string() }))
          .nonempty(),
        tags: z.optional(z.array(z.object({ name: z.string() }))),
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
          sourceURL: input.sourceURL ? input.sourceURL : "",
          description: input.description,
          image: input.image ? input.image : "",
          ingredientSegments: {
            create: input.ingredientSegments.map((segment) => ({
              title: segment.title,
              ingredients: {
                create: segment.ingredients.map((ingredient) => ({
                  content: ingredient.content,
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
          tags: input.tags
            ? {
                create: input.tags.map(({ name }) => {
                  return {
                    name: name,
                  };
                }),
              }
            : undefined,
        },
      });

      return recipe;
    }),
});
