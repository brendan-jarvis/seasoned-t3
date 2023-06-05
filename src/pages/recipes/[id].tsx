import Head from "next/head";
import { useRouter } from "next/router";

import type { NextPage } from "next";
import type {
  RecipeWithIngredients as Recipe,
  IngredientSegmentWithIngredients,
} from "~/utils/types";
import dayjs from "dayjs";
import { api } from "~/utils/api";

import { PageLayout } from "~/components/Layout";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import Image from "next/image";

import { ExternalLink } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";

const ViewRecipe: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: recipe, isLoading } = api.recipes.getOne.useQuery({
    id: id as string,
  }) as { data: Recipe; isLoading: boolean };

  const ingredients =
    recipe?.ingredientSegments as IngredientSegmentWithIngredients[];

  return (
    <>
      <Head>
        <title>Seasoned - Recipes</title>
        <meta
          name="description"
          content="Seasoned is a recipe app that allows users to search for recipes based on ingredients that are in season."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
      </Head>
      <PageLayout>
        <h1 className="p-4 text-center font-serif text-4xl font-bold tracking-wide text-seasoned-green">
          Recipes
        </h1>

        <div>
          {isLoading ? (
            <LoadingSpinner size={64} />
          ) : !recipe ? (
            <p className="text-center text-lg font-semibold text-destructive">
              Sorry, Seasoned was unable to load the recipe.
            </p>
          ) : (
            <div key={recipe.id} className="flex flex-col items-center gap-4">
              <h2 className="text-center font-serif text-2xl font-bold tracking-wider text-primary">
                {recipe.title}
              </h2>
              <p className="text-sm font-thin text-gray-600 dark:text-gray-400">
                By {recipe.byline}
              </p>
              <p className="text-sm font-thin text-gray-600 dark:text-gray-400">
                Added {dayjs(recipe.createdAt).toString()}
                {recipe.updatedAt !== recipe.createdAt &&
                  ` (updated ${dayjs(recipe.updatedAt).toString()})`}
              </p>
              {recipe.image ? (
                <Image
                  src={recipe.image}
                  alt={`${recipe.title} photo`}
                  width={300}
                  height={300}
                />
              ) : (
                <Skeleton className="h-[300px] w-[300px]" />
              )}

              {recipe.prepTime && (
                <p className="font-thin text-gray-600 dark:text-gray-400">
                  Prep time:{" "}
                  <span className="font-light">{recipe.prepTime}</span>
                </p>
              )}
              {recipe.cookTime && (
                <p className="font-thin text-gray-600 dark:text-gray-400">
                  Cook time:{" "}
                  <span className="font-light">{recipe.cookTime}</span>
                </p>
              )}
              {recipe.totalTime && (
                <p className="font-thin text-gray-600 dark:text-gray-400">
                  Total time:{" "}
                  <span className="font-light">{recipe.totalTime}</span>
                </p>
              )}
              <h3 className="font-serif text-lg font-bold tracking-wider text-gray-900 dark:text-gray-300">
                Ingredients
              </h3>
              {recipe.serves && (
                <p className="font-sans text-sm font-thin text-gray-600 dark:text-gray-400">
                  <span className="font-light">{recipe.serves}</span>
                </p>
              )}
              <ul className="text-foreground">
                {ingredients.map(
                  (segment: IngredientSegmentWithIngredients) => (
                    <li key={segment.id}>
                      {segment.title && (
                        <h4 className="mb-1 py-2 font-semibold tracking-wider text-gray-900 dark:text-gray-300">
                          {segment.title}
                        </h4>
                      )}
                      {segment.ingredients.map((ingredient) => (
                        <p key={ingredient.content}>{ingredient.content}</p>
                      ))}
                    </li>
                  )
                )}
              </ul>
              {recipe.sourceURL && (
                <Button asChild>
                  <a
                    href={recipe.sourceURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> View full recipe
                    on{" "}
                    {recipe.sourceURL.replace(
                      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+).*/i,
                      "$1"
                    )}
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </PageLayout>
    </>
  );
};

export default ViewRecipe;