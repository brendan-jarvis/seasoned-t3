import Head from "next/head";

import type { NextPage } from "next";
import type { RecipeWithIngredients as Recipe } from "~/utils/types";
import { api } from "~/utils/api";

import { LoadingSpinner } from "~/components/LoadingSpinner";
import { RecipeView } from "~/components/RecipeView";

const Recipes: NextPage = () => {
  const { data, isLoading } = api.recipes.getAll.useQuery();

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-info">
        <h1 className="mb-4 text-4xl font-bold text-gray-700">Recipes</h1>

        <div className="flex flex-wrap gap-4">
          {isLoading ? (
            <LoadingSpinner size={64} />
          ) : (
            data?.map((recipe: Recipe) => (
              <RecipeView key={recipe.id} {...recipe} />
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default Recipes;
