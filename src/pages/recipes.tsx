/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Head from "next/head";

import type { NextPage } from "next";
import type { RecipeWithIngredients as Recipe } from "~/utils/types";
import { api } from "~/utils/api";

import { PageLayout } from "~/components/Layout";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "~/components/ui/skeleton";

const Recipes: NextPage = () => {
  const { data, isLoading } = api.recipes.getAll.useQuery() as {
    data: Recipe[];
    isLoading: boolean;
  };

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
            <div className="flex flex-grow flex-wrap justify-center">
              {data.map((recipe: Recipe) => (
                <Card key={recipe.id} className="w-[350px]">
                  <Link href={`/recipes/${recipe.id}`}>
                    <CardHeader>
                      <CardTitle className="font-serif">
                        {recipe.title}
                      </CardTitle>
                      {recipe.description && (
                        <CardDescription className="text-sm">
                          {recipe.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                    {recipe.image ? (
                      <CardContent className="m-h-[200] min-w-[350]">
                        <Image
                          src={recipe.image}
                          width={350}
                          height={200}
                          alt={recipe.title}
                          className="rounded-md"
                        />
                      </CardContent>
                    ) : (
                      <CardContent>
                        <Skeleton className="h-[200] w-[350]" />
                      </CardContent>
                    )}
                    {recipe.tags && (
                      <CardFooter className="flex flex-wrap gap-2">
                        {recipe.tags.map((tag) => (
                          <Badge
                            key={tag.id}
                            variant="outline"
                            className="font-serif"
                          >
                            {tag.name}
                          </Badge>
                        ))}
                      </CardFooter>
                    )}
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </div>
      </PageLayout>
    </>
  );
};

export default Recipes;
