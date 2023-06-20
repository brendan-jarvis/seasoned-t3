import { AvailabilityType, ProduceType } from "@prisma/client";

export const produce = [
  {
    authorId: "prismaSeed",
    title: "Artichoke - Globe",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          name: "Artichoke - Globe",
        },
        create: {
          name: "Artichoke - Globe",
          january: "Unavailable",
          february: "Unavailable",
          march: "Unavailable",
          april: "Unavailable",
          may: "Unavailable",
          june: "Unavailable",
          july: "Unavailable",
          august: "Unavailable",
          september: "Unavailable",
          october: "Available",
          november: "Available",
          december: "Available",
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Artichoke - Jerusalem",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: { name: "Artichoke - Jerusalem" },
        create: {
          // TODO insert Seasonality data
          name: "Artichoke - Jerusalem",
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Asparagus",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          name: "Asparagus",
        },
        create: {
          name: "Asparagus",
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Beans - Round",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Beans - Broad",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Beetroot",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Beetroot - Baby",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Beetroot - Golden",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Bok Choy - Chinese Shanghai",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Broccoli",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Broccolini - Slender Stems",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Brussel Sprouts",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cabbage",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cabbage - Red",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cabbage - Savoy",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Capsicum - Red",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Capsicum - Green",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Capsicum - Mini (Pkt)",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Capsicum - Yellow",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Carrot - Orange Table",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Carrot - Orange Jumbo",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Carrot - Orange Baby",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Carrot - Purple Baby",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Carrot - White Baby",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Carrot - Yellow Baby",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cauliflower",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Caulini - Cauliflower Stems",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Celery",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Celeriac",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Chilli - Green",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Chilli - Red",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Chestnut",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Choko",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Courgette - Local",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Courgette - Imported",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.LimitedImported,
        june: AvailabilityType.LimitedImported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cucumber - Lebanese",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cucumber - Mini (Snacking)",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cucumber - Telegraph",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Eggplant",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Eggplant - Asian Long",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Fennel - Bulb Baby",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Fennel - Bulb Large",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Garlic - Nz",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Garlic - Black",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Garlic - Imported",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Ginger - Imported",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kale - Baby Blend",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kale - Cavolo Nero",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kale - Curly",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kholrabi",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kumara - Red",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kumara - Gold",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kumara - Orange (Beauregard)",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Leek",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Leek - Baby",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lettuce - Baby Cos",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lettuce - Butterhead",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lettuce - Crunchita",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lettuce - Green Oak",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lettuce - Iceberg",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lettuce - Lollo Biondi",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lettuce - Lollo Rosso",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lettuce - Salad Mix",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lettuce - Red Oak",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Mesclun",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Mushroom - Field (Portobello)",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Mushroom - Button Market Mix",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Mushroom - Button White",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Mushroom - Swiss Brown",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Mushroom - Oyster",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Mushroom - Shiitake",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Mushroom - Enoki",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Onion - Brown",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Onion - Brown Pickling",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Onion - Red",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Onion - Red Pickling",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Palermo Peppers - Red",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Palermo Peppers - Yellow",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Parsnip",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Peas - Fresh Garden",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Potato - Agria",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Potato - Agria Gourmet",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Potato - Golden Gourmet",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Potato - Jersey Benne",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Potato - Nadines (White Washed)",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Potato - Perla",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Potato - Red",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Potato - Red Gourmet",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Potato - White Gourmet",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Pumpkin - Crown",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Pumpkin - Butternut",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Pumpkin - Buttercup",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Radish",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Silverbeet",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Shallot",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Snow Pea",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Spinach",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Spinach - Baby",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Spring Onion",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Squash - Spaghetti",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Sugar Snaps",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Swede",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Sweetcorn",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Sweetcorn - Baby",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Taro",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - 60/70",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Red Cherry",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Vine Large",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Vine Small",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Roma",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Turnip - Baby White",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Turnip - White",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Witloof - Red",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Witloof - White",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Yam",
    type: ProduceType.Vegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Asparagus - Purple",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Asparagus - White",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Beetroot - Chioggia",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Broccoli - Romanesco",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Carrot - Purple Table",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Carrot - White Table",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Carrot - Yellow Table",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cauliflower - Purple",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Chard - Rainbow/ Red/ Swiss",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Choy Sum",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Courgette Flowers",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Horseradish Root",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kailaan",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kumara - Purple Dawn Large",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kumara - Purple Dawn Baby",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Okra",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.LimitedImported,
        february: AvailabilityType.LimitedImported,
        march: AvailabilityType.LimitedImported,
        april: AvailabilityType.LimitedImported,
        may: AvailabilityType.LimitedImported,
        june: AvailabilityType.LimitedImported,
        july: AvailabilityType.LimitedImported,
        august: AvailabilityType.LimitedImported,
        september: AvailabilityType.LimitedImported,
        october: AvailabilityType.LimitedImported,
        november: AvailabilityType.LimitedImported,
        december: AvailabilityType.LimitedImported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Potato - Maori (Urenika, Moemoe, Kowiniwini)",
    type: ProduceType.SpecialtyVegetable,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Apple - Ambrosia",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Apple - Braeburn",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Apple - Envy",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Apple - Granny Smith",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.LimitedImported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Apple - Jazz",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Apple - Royal Gala",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.LimitedImported,
        november: AvailabilityType.LimitedImported,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Apple - Sweet Tango",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Avocado",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Banana",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cape Gooseberry",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cherimoya",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Coconut - Whole (Drinking)",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Dates - Medjool",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Feijoa",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Fig",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Grapefruit - Imported",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Grapefruit - Nz",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Grapefruit - Pink",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.LimitedImported,
        february: AvailabilityType.LimitedImported,
        march: AvailabilityType.LimitedImported,
        april: AvailabilityType.LimitedImported,
        may: AvailabilityType.LimitedImported,
        june: AvailabilityType.LimitedImported,
        july: AvailabilityType.LimitedImported,
        august: AvailabilityType.LimitedImported,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.LimitedImported,
        december: AvailabilityType.LimitedImported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Grapes - Red",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Grapes - Black",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Grapes - Green",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kiwifruit - Green",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kiwifruit - Baby (Arguta)",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kiwifruit - Gold",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lemon - Meyer",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.LimitedImported,
        february: AvailabilityType.LimitedImported,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.LimitedImported,
        october: AvailabilityType.LimitedImported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lemon - Yen Ben Seedless",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.LimitedImported,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lime",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Mandarin",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Mango",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Melon - Honeydew",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Melon - Rockmelon",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Melon - Watermelon",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.LimitedImported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Orange - Valencia",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Orange - Navel",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Orange - Imported",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Orange - Blood",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Passionfruit",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Papaya (Paw Paw)",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Papaya (Paw Paw) - Green",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Pear - Brown",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.LimitedImported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.LimitedImported,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Pear - Green",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.LimitedImported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Pear - Nashi",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Pear - Piqaboo",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Persimmon",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Pineapple - Gold",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Imported,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Pomegranate",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Imported,
        november: AvailabilityType.Imported,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Rhubarb",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tamarillo - Red",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Available,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tamarillo - Golden",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tangelo",
    type: ProduceType.Fruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Blackberries",
    type: ProduceType.Berry,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Blueberries",
    type: ProduceType.Berry,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Boysenberries",
    type: ProduceType.Berry,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Available,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Gooseberries",
    type: ProduceType.Berry,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Raspberries",
    type: ProduceType.Berry,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Strawberries",
    type: ProduceType.Berry,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Strawberries - Long Stem",
    type: ProduceType.Berry,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Apricot",
    type: ProduceType.StoneFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Imported,
        february: AvailabilityType.Imported,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cherries",
    type: ProduceType.StoneFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Imported,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Imported,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Nectarine",
    type: ProduceType.StoneFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Imported,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Peach - Golden Queen",
    type: ProduceType.StoneFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Peach - White",
    type: ProduceType.StoneFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Peach - Yellow",
    type: ProduceType.StoneFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Imported,
        may: AvailabilityType.Imported,
        june: AvailabilityType.Imported,
        july: AvailabilityType.Imported,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Peacherine",
    type: ProduceType.StoneFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Plum - Doris",
    type: ProduceType.StoneFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Plum - Omega (George Wilson)",
    type: ProduceType.StoneFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Plum - Yellow",
    type: ProduceType.StoneFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Dragon Fruit (Pitaya)",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.LimitedImported,
        july: AvailabilityType.LimitedImported,
        august: AvailabilityType.LimitedImported,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Raspberries - Gold",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Black Cherry",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Choctail",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Mixed Coloured Cherry",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Heirloom Mixed",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Little Horror",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Red Cherry",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Spanish Green",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Tomato - Spanish Red",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Quince",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Yuzu",
    type: ProduceType.SpecialtyFruit,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Unavailable,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Unavailable,
        september: AvailabilityType.Unavailable,
        october: AvailabilityType.Unavailable,
        november: AvailabilityType.Unavailable,
        december: AvailabilityType.Unavailable,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Calendula",
    type: ProduceType.EdibleFlower,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Cornflower",
    type: ProduceType.EdibleFlower,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Dianthus",
    type: ProduceType.EdibleFlower,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Fairy Rose",
    type: ProduceType.EdibleFlower,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Garlic/ Onion",
    type: ProduceType.EdibleFlower,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Marigold",
    type: ProduceType.EdibleFlower,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Nasturtium (Flowers Only)",
    type: ProduceType.EdibleFlower,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Nasturtium (Leaves Only)",
    type: ProduceType.EdibleFlower,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Pansy",
    type: ProduceType.EdibleFlower,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Rose Petals",
    type: ProduceType.EdibleFlower,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Viola",
    type: ProduceType.EdibleFlower,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Angelica",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Basil",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Chervil",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Chives",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Coriander",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Curry Leaves",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Limited,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Limited,
        october: AvailabilityType.Limited,
        november: AvailabilityType.Limited,
        december: AvailabilityType.Limited,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Dill",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Fennel Fronds",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "French Tarragon",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Limited,
        february: AvailabilityType.Unavailable,
        march: AvailabilityType.Unavailable,
        april: AvailabilityType.Unavailable,
        may: AvailabilityType.Unavailable,
        june: AvailabilityType.Unavailable,
        july: AvailabilityType.Unavailable,
        august: AvailabilityType.Limited,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Lemongrass",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Mint Tips",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Oregano",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Parsley - Curly",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Parsley - Italian",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Roquette (Baby Rocket)",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Rosemary",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Sage",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Thyme",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Vietnamese Mint",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Limited,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Watercress",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Limited,
        may: AvailabilityType.Limited,
        june: AvailabilityType.Limited,
        july: AvailabilityType.Limited,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Kaffir Lime Leaves",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Bay Leaves",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
  {
    authorId: "prismaSeed",
    title: "Sprouted Beans & Seeds",
    type: ProduceType.Herb,
    seasonality: {
      connectOrCreate: {
        where: {
          // TODO add name
          name: "",
        },
        create: {
          // TODO insert Seasonality data
        },
      },
    },
    availability: {
      create: {
        january: AvailabilityType.Available,
        february: AvailabilityType.Available,
        march: AvailabilityType.Available,
        april: AvailabilityType.Available,
        may: AvailabilityType.Available,
        june: AvailabilityType.Available,
        july: AvailabilityType.Available,
        august: AvailabilityType.Available,
        september: AvailabilityType.Available,
        october: AvailabilityType.Available,
        november: AvailabilityType.Available,
        december: AvailabilityType.Available,
      },
    },
  },
];
