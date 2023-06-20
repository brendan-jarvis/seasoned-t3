import { PrismaClient } from "@prisma/client";
import { produce } from "./produce";
import { recipes } from "./recipes";
import { prices } from "./prices";

const prisma = new PrismaClient();

async function main() {
  // Add produce
  // for (const item of produce) {
  //   await prisma.produce.create({
  //     data: item,
  //   });
  // }
  // Add recipes with createdAt
  // for (const recipe of recipes) {
  //   await prisma.recipe.create({
  //     data: recipe,
  //   });
  //   const createdAt = new Date(recipe.createdAt);
  //   await prisma.recipe.create({
  //     data: {
  //       ...recipe,
  //       createdAt,
  //     },
  //   });
  // }
  // Add prices
  // for (const price of prices) {
  //   await prisma.price.create({
  //     data: {
  //       name: price.name,
  //       year_month: price.year_month,
  //       price: price.price,
  //       produce: {
  //         connect: {
  //           where: {
  //             name: {
  //               contains: price.name,
  //             },
  //           },
  //         },
  //       },
  //     },
  //   });
  // }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
