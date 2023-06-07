import Image from "next/image";
import type { RecipeWithIngredients as Recipe } from "~/utils/types";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

import { ExternalLink } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";

export const RecipeView = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div key={recipe.id} className="flex flex-col items-center gap-4">
      <h1 className="p-4 text-center font-serif text-4xl font-bold tracking-wide text-seasoned-green">
        {recipe.title}
      </h1>
      {recipe.byline && (
        <p className="text-sm font-thin text-gray-600 dark:text-gray-400">
          By {recipe.byline}
        </p>
      )}
      <p className="text-sm font-thin text-gray-600 dark:text-gray-400">
        Added {dayjs(recipe.createdAt).fromNow()}
        {recipe.updatedAt !== recipe.createdAt &&
          ` (updated ${dayjs(recipe.updatedAt).fromNow()})`}
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
          Prep time: <span className="font-light">{recipe.prepTime}</span>
        </p>
      )}
      {recipe.cookTime && (
        <p className="font-thin text-gray-600 dark:text-gray-400">
          Cook time: <span className="font-light">{recipe.cookTime}</span>
        </p>
      )}
      {recipe.totalTime && (
        <p className="font-thin text-gray-600 dark:text-gray-400">
          Total time: <span className="font-light">{recipe.totalTime}</span>
        </p>
      )}
      <h3 className="text-lg font-bold tracking-wider text-gray-900 dark:text-gray-300">
        Ingredients
      </h3>
      {recipe.serves && (
        <p className="font-sans text-sm font-thin text-gray-600 dark:text-gray-400">
          <span className="font-light">{recipe.serves}</span>
        </p>
      )}
      <ul className="text-foreground">
        {recipe.ingredientSegments.map((segment) => (
          <li key={segment.id}>
            <h4 className="mb-1 py-2 font-semibold tracking-wider text-gray-900 dark:text-gray-300">
              {segment.title}
            </h4>{" "}
            {segment.ingredients.map((ingredient) => (
              <p key={ingredient.content}>{ingredient.content}</p>
            ))}{" "}
          </li>
        ))}
      </ul>
      {recipe.sourceURL && (
        <Button className="mb-4" asChild>
          <a href={recipe.sourceURL} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> View full recipe on{" "}
            {recipe.sourceURL.replace(
              /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+).*/i,
              "$1"
            )}
          </a>
        </Button>
      )}
    </div>
  );
};
