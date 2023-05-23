import Head from "next/head";

import type { NextPage } from "next";
import type { RecipeWithIngredients as Recipe } from "~/utils/types";
import { api } from "~/utils/api";

import { PageLayout } from "~/components/Layout";
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
      <PageLayout>
        <h1 className="p-4 text-center font-serif text-4xl font-bold tracking-wide text-seasoned-green">
          Recipes
        </h1>

        <div>
          {isLoading ? (
            <LoadingSpinner size={64} />
          ) : !data ? (
            <p className="text-center text-lg font-semibold text-destructive">
              Sorry, Seasoned was unable to load recipes.
            </p>
          ) : (
            data?.map((recipe: Recipe) => (
              <RecipeView key={recipe.id} {...recipe} />
            ))
          )}
        </div>
      </PageLayout>
    </>
  );
};

export default Recipes;
