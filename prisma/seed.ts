import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const artichoke = await prisma.produce.upsert({
    data: {
      title: "Artichoke - Globe",
      type: "Vegetable",
      seasonality: {
        create: {
          january: "Unavailable",
          february: "Unavailable",
          march: "Unavailable",
          april: "Unavailable",
          may: "Unavailable",
          june: "Unavailable",
          july: "Unavailable",
          august: "Available",
          september: "Available",
          october: "Available",
          november: "Unavailable",
          december: "Unavailable",
        },
      },
    },
  });

  console.log({ artichoke });
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
