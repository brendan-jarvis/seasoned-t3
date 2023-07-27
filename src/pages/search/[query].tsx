import Head from "next/head";
import { useRouter } from "next/router";

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
import { Button } from "~/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "~/components/ui/skeleton";

const RecipeCardSkeleton = () => (
  <div className="mb-4 flex flex-wrap justify-center gap-4">
    <div className="flex items-center gap-4">
      <Card className="space-y-2 p-6">
        <Skeleton className="h-4 w-[200px] bg-slate-300" />
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-[350px] w-full bg-slate-500" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
        </div>
      </Card>
    </div>
  </div>
);

const ViewRecipe: NextPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const limit = parseInt(router.query.limit as string) || 10;
  const offset = parseInt(router.query.offset as string) || 0;
  const { data, isLoading } = api.recipes.findMany.useQuery({
    query: query as string,
    offset: offset,
    limit: limit,
  });

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Seasoned - Search Recipes</title>
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
          <Skeleton className="mx-auto my-4 w-[500px] p-4 text-center" />
          <Skeleton className="mx-auto mb-4 h-4 w-[300px] text-center" />
          <div className="mx-auto mb-4 flex max-w-[800px] flex-wrap justify-center gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <RecipeCardSkeleton key={index} />
            ))}
          </div>
        </PageLayout>
      </>
    );
  }

  const { recipes, count } = data as { recipes: Recipe[]; count: number };

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
          &apos;{query}&apos; recipes
        </h1>
        <h2 className="mb-4 text-center text-sm font-semibold text-gray-500">
          Viewing {offset + 1} - {offset + limit} of {count} results
        </h2>

        <div>
          {isLoading ? (
            <LoadingSpinner size={64} />
          ) : !recipes ? (
            <p className="text-center text-lg font-semibold text-destructive">
              Sorry, Seasoned was unable to load the recipes.
            </p>
          ) : (
            <>
              <div className="mx-auto mb-4 flex max-w-[800px] flex-wrap justify-center gap-4">
                {recipes.map((recipe: Recipe) => (
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
                    </Link>
                    {recipe.tags && (
                      <CardFooter className="flex flex-wrap gap-2">
                        {recipe.tags.map((tag) => (
                          <Badge
                            key={tag.id}
                            variant="outline"
                            className="font-serif"
                          >
                            <Link href={`/search/${tag.name}`}>{tag.name}</Link>
                          </Badge>
                        ))}
                      </CardFooter>
                    )}
                  </Card>
                ))}
              </div>
              <div className="my-2 flex flex-row justify-center gap-2">
                <Button
                  variant="outline"
                  disabled={offset === 0}
                  onClick={() => {
                    void router.push({
                      query: { query: query, limit, offset: offset - limit },
                    });
                  }}
                >
                  Previous
                </Button>
                <Button
                  disabled={offset + limit >= count}
                  onClick={() =>
                    void router.push({
                      query: { query: query, limit, offset: offset + limit },
                    })
                  }
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </div>
      </PageLayout>
    </>
  );
};

export default ViewRecipe;
