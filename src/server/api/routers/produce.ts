import clerkClient from "@clerk/clerk-sdk-node";
import { z } from "zod";
import type { User } from "@clerk/nextjs/dist/api";
import type { Produce } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const availabilityType = z.enum([
  "Available",
  "Limited",
  "Unavailable",
  "Imported",
  "LimitedImported",
]);

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profileImageUrl: user.profileImageUrl,
  };
};

const addUserDataToAllProduce = async (allProduce: Produce[]) => {
  const userId = allProduce.map((produce) => produce.authorId);
  const users = (
    await clerkClient.users.getUserList({
      userId: userId,
      limit: 100,
    })
  ).map(filterUserForClient);

  return allProduce.map((produce) => {
    const author = users.find((user) => user.id === produce.authorId);

    if (!author) {
      console.error("AUTHOR NOT FOUND", produce);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `Author for produce not found. PRODUCE ID: ${produce.id}, USER ID: ${produce.authorId}`,
      });
    }

    if (!author.username) {
      author.username = "Seasoned User";
    }

    return {
      produce,
      author: {
        ...author,
        username: author.username ?? "Seasoned User",
      },
    };
  });
};

export const produceRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const allProduce = await ctx.prisma.produce.findMany({
      take: 10,
      orderBy: { id: "asc" },
      include: { availability: true },
    });

    return addUserDataToAllProduce(allProduce);
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
        availability: z.array(availabilityType),
      })
    )
    .query(async ({ ctx, input }) => {
      const allProduce = await ctx.prisma.produce.findMany({
        where: {
          availability: {
            [input.month]: {
              in: input.availability,
            },
          },
        },
        orderBy: { type: "asc" },
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
          "EdibleFlower",
          "Herb",
        ]),
        description: z.string().optional(),
        image: z.string().optional(),
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
          availability: {
            create: input.availability,
          },
        },
      });

      return produce;
    }),
});
