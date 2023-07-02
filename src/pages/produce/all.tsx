import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { PageLayout } from "~/components/Layout";
import { Badge } from "~/components/ui/badge";
import { LoadingSpinner } from "~/components/LoadingSpinner";

import { Flower, Snowflake, Sun, Leaf } from "lucide-react";

import { api } from "~/utils/api";

import { capitaliseFirstLetters, getCurrentMonth } from "~/utils/func";

const ProduceAvailability: NextPage = () => {
  const currentMonth = getCurrentMonth();

  const currentSeason = (month: string) => {
    if (month === "december" || month === "january" || month === "february") {
      return <Sun color="gold" className="inline" />;
    } else if (month === "march" || month === "april" || month === "may") {
      return <Leaf color="orange" className="inline" />;
    } else if (month === "june" || month === "july" || month === "august") {
      return <Snowflake color="cyan" className="inline" />;
    } else {
      return <Flower color="pink" className="inline" />;
    }
  };

  const { data, isLoading } = api.seasonality.getAllByMonth.useQuery({
    month: currentMonth,
  });

  const fruitInSeason = data?.filter((produce) =>
    produce?.Produce[0]?.type.includes("Fruit")
  );

  const vegetablesInSeason = data?.filter((produce) =>
    produce?.Produce[0]?.type.includes("Vegetable")
  );

  const otherProduceInSeason = data?.filter(
    (produce) =>
      !produce?.Produce[0]?.type.includes("Fruit") &&
      !produce?.Produce[0]?.type.includes("Vegetable")
  );

  return (
    <>
      <Head>
        <title>Seasoned - Produce</title>
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
        <h1 className="py-8 text-center font-serif text-4xl font-bold tracking-wide text-seasoned-green">
          Produce in season this{" "}
          {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
          {currentSeason(currentMonth)}
        </h1>
        {isLoading ? (
          <LoadingSpinner size={64} />
        ) : !data ? (
          <p className="text-center text-lg font-semibold text-red-600">
            Sorry, Seasoned was unable to load a list of produce that&apos;s in
            season.
          </p>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 px-4 pb-8">
            <div>
              <h2 className="font-serif text-lg font-bold text-seasoned-green">
                Fruit
              </h2>
              <ol className="text-foreground">
                {fruitInSeason &&
                  fruitInSeason.map((fruit) => (
                    <li key={fruit.id} className="p-1">
                      <Badge variant="outline" className="border-rose-500">
                        Fruit
                      </Badge>{" "}
                      <Link
                        href={`/produce/${fruit.name}`}
                        className="text-base hover:underline"
                      >
                        {capitaliseFirstLetters(fruit.name)}
                      </Link>
                    </li>
                  ))}
              </ol>
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-seasoned-green">
                Vegetables
              </h2>
              <ol className="text-foreground">
                {vegetablesInSeason &&
                  vegetablesInSeason.map((vegetable) => (
                    <li key={vegetable.id} className="p-1">
                      <Badge variant="outline" className="border-sky-500">
                        Vegetable
                      </Badge>{" "}
                      <Link
                        href={`/produce/${vegetable.name}`}
                        className="text-base hover:underline"
                      >
                        {capitaliseFirstLetters(vegetable.name)}
                      </Link>
                    </li>
                  ))}
              </ol>
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-seasoned-green">
                Other
              </h2>
              <ol className="text-foreground">
                {otherProduceInSeason &&
                  otherProduceInSeason.map((item) => (
                    <li key={item.id} className="p-1">
                      <Badge
                        variant="outline"
                        className="border-emerald-500"
                        color="green"
                      >
                        {item?.Produce[0]?.type}
                      </Badge>{" "}
                      <Link
                        href={`/produce/${item.name}`}
                        className="text-base hover:underline"
                      >
                        {capitaliseFirstLetters(item.name)}
                      </Link>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        )}
      </PageLayout>
    </>
  );
};

export default ProduceAvailability;
