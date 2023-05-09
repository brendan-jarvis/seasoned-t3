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

        <div className="flex flex-wrap justify-center gap-4">
          {isLoading ? (
            <LoadingSpinner size={64} />
          ) : (
            data?.map((recipe: Recipe) => (
              <div
                key={recipe.id}
                className="flex flex-col items-center justify-center gap-4"
              >
                <h2 className="text-2xl font-bold text-primary">
                  {recipe.title}
                </h2>
                {recipe.byline}
                <Image
                  src={recipe.mediumImage}
                  alt={`${recipe.title} photo`}
                  width={300}
                  height={300}
                />
                <h3 className="text-lg font-bold text-gray-900">Ingredients</h3>
                <ul className="text-black">
                  {recipe.ingredientSegments.map((segment) => (
                    <li key={segment.id}>
                      <h4 className="text-md font-bold text-gray-700">
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
                <h3 className="text-lg font-bold text-gray-900">
                  Instructions
                </h3>
                <ol className="flex w-1/2 flex-col justify-center ">
                  {recipe.instructions.map((instruction, index) => (
                    <>
                      {instruction.title && (
                        <h4 className="mb-1 p-2 text-sm font-medium tracking-wider text-gray-900">
                          {instruction.title}
                        </h4>
                      )}
                      <li key={index} className="flex-grow p-2 leading-relaxed">
                        {instruction.content}
                      </li>
                    </>
                  ))}
                </ol>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default Recipes;
