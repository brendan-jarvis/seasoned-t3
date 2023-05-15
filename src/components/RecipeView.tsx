import Image from "next/image";
import type { RecipeWithIngredients as Recipe } from "~/utils/types";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const RecipeView = (recipe: Recipe) => {
  return (
    <div key={recipe.id} className="flex flex-col items-center gap-4">
      <h2 className="text-center text-2xl font-bold tracking-wider text-primary">
        {recipe.title}
      </h2>
      <p className="text-sm font-thin text-gray-600">By {recipe.byline}</p>
      <p className="text-sm font-thin text-gray-600">
        Added {dayjs(recipe.createdAt).fromNow()}
        {recipe.updatedAt !== recipe.createdAt &&
          ` (updated ${dayjs(recipe.updatedAt).fromNow()})`}
      </p>
      <Image
        src={recipe.image}
        alt={`${recipe.title} photo`}
        width={300}
        height={300}
      />

      {recipe.prepTime && (
        <p className="font-thin">
          Prep time: <span className="font-light">{recipe.prepTime}</span>
        </p>
      )}
      {recipe.cookTime && (
        <p className="font-thin">
          Cook time: <span className="font-light">{recipe.cookTime}</span>
        </p>
      )}
      {recipe.totalTime && (
        <p className="font-thin">
          Total time: <span className="font-light">{recipe.totalTime}</span>
        </p>
      )}
      <h3 className="text-lg font-bold tracking-wider text-gray-900">
        Ingredients
      </h3>
      {recipe.serves && (
        <p className="font-sans text-sm font-thin text-gray-600">
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
                {ingredient.amount} {ingredient.unit} {ingredient.name}
              </p>
            ))}{" "}
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-bold tracking-wider text-gray-900">
        Instructions
      </h3>
      <ol className="mx-auto max-w-4xl px-4 font-sans text-gray-800 sm:px-6 lg:px-8">
        {recipe.instructions.map((instruction, index) => (
          <>
            {instruction.title && (
              <h4 className="mb-1 p-2 tracking-wider text-gray-950">
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
          className="p-4 font-light text-gray-800 underline"
        >
          View full recipe on{" "}
          {recipe.sourceURL.replace(
            /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+).*/i,
            "$1"
          )}
        </a>
      )}
    </div>
  );
};
