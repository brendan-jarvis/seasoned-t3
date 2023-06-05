import type { Prisma } from "@prisma/client";

export type RecipeWithIngredients = Prisma.RecipeGetPayload<{
  include: {
    ingredientSegments: {
      include: {
        ingredients: {
          select: {
            content: true;
          };
        };
      };
    };
    instructions: {
      select: {
        title: true;
        content: true;
      };
    };
    tags: true;
  };
}>;

export type IngredientSegmentWithIngredients =
  Prisma.IngredientSegmentGetPayload<{
    include: {
      ingredients: {
        select: {
          title: true;
          content: true;
        };
      };
    };
  }>;
