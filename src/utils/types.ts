import type { Prisma } from "@prisma/client";

export type RecipeWithIngredients = Prisma.RecipeGetPayload<{
  include: {
    ingredientSegments: {
      include: {
        ingredients: {
          select: {
            amount: true;
            unit: true;
            name: true;
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
