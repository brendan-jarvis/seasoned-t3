import Image from "next/image";
import Head from "next/head";

import type { NextPage } from "next";
import type { RecipeWithIngredients as Recipe } from "~/utils/types";
import { api } from "~/utils/api";

import { LoadingSpinner } from "~/components/LoadingSpinner";

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
              <div key={recipe.id} className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold tracking-wider text-primary">
                  {recipe.title}
                </h2>
                <p className="text-sm font-thin">By {recipe.byline}</p>
                <Image
                  src={recipe.mediumImage}
                  alt={`${recipe.title} photo`}
                  width={300}
                  height={300}
                />

                {recipe.prepTime && (
                  <p className="font-thin">
                    Prep time:{" "}
                    <span className="font-light">{recipe.prepTime}</span>
                  </p>
                )}
                {recipe.cookTime && (
                  <p className="font-thin">
                    Cook time:{" "}
                    <span className="font-light">{recipe.cookTime}</span>
                  </p>
                )}
                {recipe.totalTime && (
                  <p className="font-thin">
                    Total time:{" "}
                    <span className="font-light">{recipe.totalTime}</span>
                  </p>
                )}
                <h3 className="text-lg font-bold tracking-wider text-gray-900">
                  Ingredients
                </h3>
                {recipe.serves && (
                  <p className="font-thin">
                    Serves: <span className="font-light">{recipe.serves}</span>
                  </p>
                )}
                <ul className="text-black">
                  {recipe.ingredientSegments.map((segment) => (
                    <li key={segment.id}>
                      <h4 className="mb-1 py-2 font-semibold tracking-wider text-gray-900">
                        {segment.title}
                      </h4>{" "}
                      {segment.ingredients.map((ingredient) => (
                        <p key={ingredient.name}>
                          {ingredient.amount} {ingredient.unit}{" "}
                          {ingredient.name}
                        </p>
                      ))}{" "}
                    </li>
                  ))}
                </ul>
                <h3 className="text-lg font-bold tracking-wider text-gray-900">
                  Instructions
                </h3>
                <ol className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                  {recipe.instructions.map((instruction, index) => (
                    <>
                      {instruction.title && (
                        <h4 className="mb-1 p-2 tracking-wider text-gray-900">
                          {instruction.title}
                        </h4>
                      )}
                      <li key={index} className="p-2 text-base leading-relaxed">
                        {instruction.content}
                      </li>
                    </>
                  ))}
                </ol>
                {recipe.sourceURL && (
                  <a
                    href={recipe.sourceURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 font-light underline"
                  >
                    View full recipe on{" "}
                    {recipe.sourceURL.replace(
                      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+).*/i,
                      "$1"
                    )}
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default Recipes;
