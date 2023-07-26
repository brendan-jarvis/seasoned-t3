import Head from "next/head";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-hot-toast";
import { useState } from "react";

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

import { ExternalLink, Heart } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { Badge } from "~/components/ui/badge";

const DeleteFavourite = ({
  recipeId,
  recipeTitle,
  setIsFavourite,
}: {
  recipeId: number;
  recipeTitle: string;
  setIsFavourite: () => void;
}) => {
  const { mutate, isLoading: isDeletingFavourite } =
    api.favourites.deleteOne.useMutation({
      onSuccess: () => {
        toast.success(`Removed ${recipeTitle} from favourites!`);
        setIsFavourite();
      },
      onError: (e) => {
        const errorMessage = e.data?.zodError?.fieldErrors.content;
        const errorCode = e.data?.code;
        if (errorMessage && errorMessage[0]) {
          toast.error(errorMessage[0]);
        }
        if (errorCode === "INTERNAL_SERVER_ERROR") {
          toast.error("Favourite already deleted!");
        }
        if (errorCode === "TOO_MANY_REQUESTS") {
          toast.error("Too many requests! Please try again later.");
        } else {
          toast.error("Failed to delete favourite! Please try again later.");
        }
      },
    });

  return (
    <Button
      variant="outline"
      className="font-serif"
      disabled={isDeletingFavourite}
      onClick={() => {
        mutate({
          recipeId: recipeId,
        });
      }}
    >
      <Heart className="mr-2 h-4 w-4 fill-pink-500 text-pink-500" /> Added to
      Favourites
    </Button>
  );
};

const ViewRecipe: NextPage = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const { id } = router.query;
  const { data: recipe, isLoading } = api.recipes.getOne.useQuery({
    id: id as string,
  }) as { data: Recipe; isLoading: boolean };
  const [isFavourite, setIsFavourite] = useState(false);

  const { mutate, isLoading: isLoadingFavourite } =
    api.favourites.addOrUpdateOne.useMutation({
      onSuccess: () => {
        toast.success(`Added ${recipe.title} to favourites!`);
        setIsFavourite(true);
      },
      onError: (e) => {
        const errorMessage = e.data?.zodError?.fieldErrors.content;
        const errorCode = e.data?.code;
        if (errorMessage && errorMessage[0]) {
          toast.error(errorMessage[0]);
        }
        if (errorCode === "INTERNAL_SERVER_ERROR") {
          toast.error("Recipe already in favourites!");
        }
        if (errorCode === "TOO_MANY_REQUESTS") {
          toast.error("Too many requests! Please try again later.");
        } else {
          toast.error("Failed to add to favourites! Please try again later.");
        }
      },
    });

  const ingredients =
    recipe?.ingredientSegments as IngredientSegmentWithIngredients[];

  if (isLoading) {
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
          <LoadingSpinner size={64} />
        </PageLayout>
      </>
    );
  }

  if (!recipe) {
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
            Unable to fetch recipe
          </h1>
          <p className="text-center text-lg font-semibold text-destructive">
            Sorry, Seasoned was unable to load the recipe.
          </p>
        </PageLayout>
      </>
    );
  }

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
        <div key={recipe.id} className="flex flex-col items-center gap-4 px-4">
          <h1 className="p-4 text-center font-serif text-4xl font-bold tracking-wide text-seasoned-green">
            {recipe.title}
          </h1>
          {isSignedIn && isFavourite ? (
            <DeleteFavourite
              recipeId={recipe.id}
              recipeTitle={recipe.title}
              setIsFavourite={() => setIsFavourite(false)}
            />
          ) : (
            <Button
              variant="outline"
              className="font-serif"
              disabled={isLoadingFavourite || !isSignedIn}
              onClick={() => {
                mutate({
                  recipeId: recipe.id,
                });
              }}
            >
              <Heart className="mr-2 h-4 w-4 text-pink-500" /> Add to Favourites
            </Button>
          )}
          {recipe.tags && (
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <Badge key={tag.id} variant="outline" className="font-serif">
                  {tag.name}
                </Badge>
              ))}
            </div>
          )}
          {recipe.byline && (
            <p className="text-sm font-thin text-gray-600 dark:text-gray-400">
              By {recipe.byline}
            </p>
          )}
          <p className="text-sm font-thin text-gray-600 dark:text-gray-400">
            Added {dayjs(recipe.createdAt).format("D MMM YYYY")}
            {/* {recipe.updatedAt !== recipe.createdAt &&
              ` (updated ${dayjs(recipe.updatedAt).format("D MMM YYYY")})`} */}
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
          {recipe.description && (
            <>
              <p className="max-w-lg font-sans text-gray-900 dark:text-gray-300">
                {recipe.description}
              </p>
            </>
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
            {ingredients.map((segment: IngredientSegmentWithIngredients) => (
              <li key={segment.id}>
                {segment.title && (
                  <h4 className="mb-1 py-2 font-semibold tracking-wider text-gray-900 dark:text-gray-300">
                    {segment.title}
                  </h4>
                )}
                {segment.ingredients.map((ingredient) => (
                  <p key={ingredient.content} className="font-sans">
                    {ingredient.content}
                  </p>
                ))}
              </li>
            ))}
          </ul>
          {recipe.sourceURL && (
            <Button className="mb-4" asChild>
              <a
                href={recipe.sourceURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> View full recipe on{" "}
                {recipe.sourceURL.replace(
                  /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+).*/i,
                  "$1"
                )}
              </a>
            </Button>
          )}
        </div>
      </PageLayout>
    </>
  );
};

export default ViewRecipe;
