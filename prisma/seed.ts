import { produce } from "./produce";
import { PrismaClient } from "@prisma/client";
import { recipes } from "./recipes";

const prisma = new PrismaClient();

async function main() {
  for (const item of produce) {
    await prisma.produce.create({
      data: item,
    });
  }
  for (const recipe of recipes) {
    await prisma.recipe.create({
      data: recipe,
    });
  }
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
