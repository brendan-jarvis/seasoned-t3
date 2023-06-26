import { type NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { PageLayout } from "~/components/Layout";
import { api } from "~/utils/api";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import { Search, PlusCircle } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

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
      <div className="flex items-center justify-center">
        <div className="flex h-auto grid-flow-col flex-wrap gap-1 overflow-y-hidden overflow-x-scroll rounded-md">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            uniqueProduce?.map((title, index) => (
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
                <h2 className="justify-center text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {title}
                </h2>
                <TooltipProvider>
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
                </TooltipProvider>
              </div>
            ))
          )}
        </div>
      </div>
    );
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
                alt="Orange carrot icon"
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
            <div>
              <h2
                className="mb-2 text-xl font-bold tracking-tight text-seasoned-green"
                style={{ whiteSpace: "pre-line" }}
              >
                Produce in season this{" "}
                {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
              </h2>

              <ProduceCarousel />
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
