import { type NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useState, useMemo } from "react";

import { PageLayout } from "~/components/Layout";
import { api } from "~/utils/api";
import { Search, PlusCircle } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "~/components/ui/tooltip";

// Recipe recommendations imports
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Skeleton } from "~/components/ui/skeleton";
import type { RecipeWithIngredients as Recipe } from "~/utils/types";
import Link from "next/link";

const Home: NextPage = () => {
  const router = useRouter();
  const currentMonth = new Date()
    .toLocaleString("default", { month: "long" })
    .toLowerCase() as
    | "january"
    | "february"
    | "march"
    | "april"
    | "may"
    | "june"
    | "july"
    | "august"
    | "september"
    | "october"
    | "november"
    | "december";

  const { data, isLoading } = api.produce.getAllByMonth.useQuery({
    month: currentMonth,
    seasonality: "Available",
  });

  const [searchQuery, setSearchQuery] = useState<string>("");
  const randomProduce = useMemo(() => {
    return [...new Set(data?.map((item) => item.title.split(" - ")[0]))]
      ?.sort(() => Math.random() - Math.random())
      .slice(0, 3)
      .join(", ");
  }, [data]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery) {
      void router.push(`/search/${searchQuery}`);
    }
  };

  const ProduceCarousel = () => {
    const sortedProduce = data?.sort((a, b) => a.title.localeCompare(b.title));

    const uniqueProduce = [
      ...new Set(sortedProduce?.map((item) => item.title.split(" - ")[0])),
    ];

    return (
      <div className="mx-auto grid max-w-lg auto-cols-max grid-flow-col gap-1 overflow-y-hidden overflow-x-scroll rounded-md">
        <div className="flex space-x-1">
          {uniqueProduce?.map((title, index) => (
            <div
              key={index}
              className="h-32 w-32 rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <Image
                width={128}
                height={16}
                alt={title ? title : "Produce"}
                src={`/images/produce/${
                  title
                    ? title.toLowerCase().replaceAll(" ", "-")
                    : "/images/produce.jpg"
                }.jpg`}
                quality={50}
                className="w-128 h-16 rounded-t-lg object-cover object-center"
              />
              <div
                className="flex cursor-pointer items-center justify-center gap-1 py-2"
                onClick={() =>
                  setSearchQuery(
                    (prevQuery) =>
                      `${prevQuery}${prevQuery ? ", " : ""}${
                        title?.toLowerCase() || ""
                      }`
                  )
                }
              >
                <h2 className="justify-center text-center text-sm font-semibold text-gray-700 hover:underline dark:text-gray-300">
                  {title}
                </h2>
                <PlusCircle className="h-4 w-4" />
              </div>
              {/* <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-4 w-4 rounded-full p-0"
                      onClick={() =>
                        setSearchQuery(
                          (prevQuery) =>
                            `${prevQuery}${prevQuery ? ", " : ""}${
                              title?.toLowerCase() || ""
                            }`
                        )
                      }
                    >
                      <PlusCircle className="h-4 w-4" />
                      <span className="sr-only">Add</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add {title?.toLowerCase()} to search</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
            </div>
          ))}
        </div>
      </div>
    );
  };

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

  const RecipeRecommendations = ({
    randomProduce,
  }: {
    randomProduce: string;
  }) => {
    const [showCount, setShowCount] = useState(2);
    const { data: randomRecipes, isLoading: isLoadingRecommendations } =
      api.recipes.findMany.useQuery({
        query: randomProduce,
        offset: 0,
        limit: 10,
        unsorted: true,
      });

    if (isLoadingRecommendations) {
      return (
        <>
          <Skeleton className="mx-auto my-2 max-w-[300px] bg-slate-300 py-2" />
          <div className="mx-auto mb-4 flex max-w-[800px] flex-wrap justify-center gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <RecipeCardSkeleton key={index} />
            ))}
          </div>
        </>
      );
    }

    if (randomRecipes) {
      const produceArray = randomProduce.split(", ");
      // const joinedProduce = `${produceArray
      //   .slice(0, -1)
      //   .join(", ")}, or ${String(produceArray.slice(-1))}`;
      const joinedProduce =
        produceArray.slice(0, -1).join(", ") +
        ", or " +
        String(produceArray.slice(-1));

      return (
        <>
          <h2 className="text-sm tracking-tight text-slate-500">{`Recipes with any of ${joinedProduce}`}</h2>
          <div className="mx-auto my-4 flex max-w-[800px] flex-wrap justify-center gap-4">
            {randomRecipes.recipes.slice(0, showCount).map((recipe: Recipe) => (
              <Card key={recipe.id} className="w-[350px]">
                <Link href={`/recipes/${recipe.id}`}>
                  <CardHeader>
                    <CardTitle className="font-serif">{recipe.title}</CardTitle>
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
          {showCount < randomRecipes.recipes.length && (
            <Button
              variant="outline"
              onClick={() => setShowCount(showCount + 2)}
              className="border-slate-300 font-semibold drop-shadow-md"
            >
              Show More
            </Button>
          )}
        </>
      );
    }
  };

  return (
    <>
      <Head>
        <title>Seasoned</title>
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
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="container">
            <div className="flex items-baseline justify-center text-center">
              <h1 className="my-8 font-serif text-6xl font-semibold tracking-tight text-seasoned-green drop-shadow-md ">
                Seasoned
              </h1>
              <Image
                src="/images/fa-carrot.svg"
                width={46}
                height={46}
                alt="Carrot icon"
                className="bounce-once ml-1"
              />
            </div>

            <p className="mb-4 font-sans text-sm text-gray-900 dark:text-gray-500">
              Search ingredients in season to find delicious recipes!
            </p>

            <form
              className="mx-auto flex w-full max-w-sm justify-center space-x-2 pb-8 text-center"
              onSubmit={handleSubmit}
            >
              <div className="items-left grid w-full max-w-sm gap-1.5">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                  />
                  <Button variant="ghost" type="submit">
                    <Search />
                  </Button>
                </div>
                <p className="pl-2 text-left text-sm text-muted-foreground">
                  Tip: Enter the ingredients separated by &apos;, &apos;
                </p>
              </div>
            </form>
          </div>
          <div className="container">
            <h2
              className="mb-2 text-xl font-bold tracking-tight text-seasoned-green"
              style={{ whiteSpace: "pre-line" }}
            >
              Produce in season this{" "}
              {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
            </h2>

            <ProduceCarousel />
          </div>
          <div className="min-h-full">
            <h1 className="mt-16 text-2xl font-bold tracking-tight text-seasoned-orange">
              Recipe recommendations
            </h1>
            {isLoading ? (
              <>
                <Skeleton className="mx-auto my-2 max-w-[300px] bg-slate-300 py-2" />
                <div className="mx-auto mb-4 flex max-w-[800px] flex-wrap justify-center gap-4">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <RecipeCardSkeleton key={index} />
                  ))}
                </div>
              </>
            ) : (
              <RecipeRecommendations randomProduce={randomProduce} />
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
