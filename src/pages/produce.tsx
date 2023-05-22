import { type NextPage } from "next";
import Head from "next/head";
import { AvailabilityType, ProduceType } from "@prisma/client";

import { PageLayout } from "~/components/Layout";
import { Badge } from "~/components/ui/badge";
import { LoadingSpinner } from "~/components/LoadingSpinner";

import { api } from "~/utils/api";

const Produce: NextPage = () => {
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
    availability: [AvailabilityType.Available],
  });

  const uniqueProduce = data
    ?.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (t) => t.title.split(" - ")[0] === item.title.split(" - ")[0]
        )
    )
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((obj) => {
      return {
        ...obj,
        title: obj.title.split(" - ")[0],
      };
    });

  let fruitInSeason, vegetablesInSeason, otherProduceInSeason;

  if (uniqueProduce) {
    fruitInSeason = uniqueProduce.filter((item) =>
      [
        ProduceType.Fruit,
        ProduceType.SpecialtyFruit,
        ProduceType.Berry,
        ProduceType.StoneFruit,
      ].some((type) => item.type === type)
    );

    vegetablesInSeason = uniqueProduce.filter((item) =>
      [ProduceType.Vegetable, ProduceType.SpecialtyVegetable].some(
        (type) => item.type === type
      )
    );

    otherProduceInSeason = uniqueProduce.filter((item) =>
      [ProduceType.EdibleFlower, ProduceType.Herb].some(
        (type) => item.type === type
      )
    );
  }

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
        <h1 className="py-8 text-center text-4xl font-bold tracking-wide text-seasoned-green">
          Produce in season this{" "}
          <span className="font-bold text-seasoned-orange">
            {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
          </span>
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
              <h4 className="text-lg font-bold text-seasoned-green">Fruit</h4>
              <ol className="text-foreground">
                {fruitInSeason &&
                  fruitInSeason.map((fruit) => (
                    <li key={fruit.id} className="p-1">
                      <Badge variant="outline" className="border-rose-500">
                        {fruit.type}
                      </Badge>{" "}
                      {fruit.title}
                    </li>
                  ))}
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-bold text-seasoned-green">
                Vegetables
              </h4>
              <ol className="text-foreground">
                {vegetablesInSeason &&
                  vegetablesInSeason.map((vegetable) => (
                    <li key={vegetable.id} className="p-1">
                      <Badge variant="outline" className="border-sky-500">
                        Vegetable
                      </Badge>{" "}
                      {vegetable.title}
                    </li>
                  ))}
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-bold text-seasoned-green">Other</h4>
              <ol className="text-foreground">
                {otherProduceInSeason &&
                  otherProduceInSeason.map((item) => (
                    <li key={item.id} className="p-1">
                      <Badge
                        variant="outline"
                        className="border-emerald-500"
                        color="green"
                      >
                        {item.type}
                      </Badge>{" "}
                      {item.title}
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

export default Produce;
