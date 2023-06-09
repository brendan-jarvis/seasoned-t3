import Link from "next/link";
import Image from "next/image";

import { api } from "~/utils/api";

import type { RecipeWithIngredients as Recipe } from "~/utils/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Skeleton } from "~/components/ui/skeleton";

const RecipeCardSkeleton = () => (
  <Card className="w-[250px] space-y-2 p-6">
    <Skeleton className="h-4 w-[150px] bg-slate-300" />
    <Skeleton className="h-[150px] w-full bg-slate-500" />
    <div className="flex flex-wrap gap-2">
      <Skeleton className="h-4 w-10" />
      <Skeleton className="h-4 w-10" />
      <Skeleton className="h-4 w-10" />
    </div>
  </Card>
);

const RecipesByIngredient = ({
  ingredient,
  limit = 10,
  offset = 0,
}: {
  ingredient: string;
  limit: number;
  offset: number;
}) => {
  const { data, isLoading } = api.recipes.findMany.useQuery({
    query: ingredient,
    offset: offset,
    limit: limit,
  });

  if (isLoading) {
    return (
      <div className="mx-auto grid w-[300px] auto-cols-max grid-flow-col gap-1 overflow-y-hidden overflow-x-scroll rounded-md">
        {Array.from({ length: 10 }).map((_, index) => (
          <RecipeCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!data) {
    return (
      <>
        <h2 className="p-4 text-center font-serif text-xl font-bold tracking-wide text-seasoned-green">
          Unable to fetch recipes
        </h2>
        <p className="text-center text-lg font-semibold text-destructive">
          {`Sorry, Seasoned was unable to load the recipes for ${ingredient}.`}
        </p>
      </>
    );
  }

  const allRecipes = data.recipes;

  return (
    <div className="mx-auto grid w-[300px] auto-cols-max grid-flow-col gap-1 overflow-y-hidden overflow-x-scroll rounded-md">
      {allRecipes.map((recipe: Recipe) => (
        <Card key={recipe.id} className="w-[250px]">
          <Link href={`/recipes/${recipe.id}`}>
            <CardHeader>
              <CardTitle className="font-serif text-sm hover:underline">
                {recipe.title}
              </CardTitle>
            </CardHeader>
            {recipe.image ? (
              <CardContent className="m-h-[100] min-w-[250]">
                <Image
                  src={recipe.image}
                  width={160}
                  height={218}
                  alt={recipe.title}
                  className="mx-auto rounded-md transition-transform duration-200 hover:scale-110"
                />
              </CardContent>
            ) : (
              <CardContent>
                <Skeleton className="h-[100] w-[250]" />
              </CardContent>
            )}
          </Link>
          {recipe.tags && (
            <CardFooter className="flex flex-wrap gap-1">
              {recipe.tags.map((tag) => (
                <Badge
                  key={tag.id}
                  variant="outline"
                  className="font-serif text-xs"
                >
                  <Link
                    href={`/search/${tag.name}`}
                    className="hover:underline"
                  >
                    {tag.name}
                  </Link>
                </Badge>
              ))}
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
};

export default RecipesByIngredient;
