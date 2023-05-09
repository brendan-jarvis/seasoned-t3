import { type NextPage } from "next";
import Head from "next/head";
import { AvailabilityType, ProduceType } from "@prisma/client";

import { Nav } from "~/components/Nav";
import { Badge } from "~/components/Badge";
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

  let fruitInSeason, vegetablesInSeason, otherProduceInSeason;

  if (data) {
    fruitInSeason = data.filter((item) =>
      [
        ProduceType.Fruit,
        ProduceType.SpecialtyFruit,
        ProduceType.Berry,
        ProduceType.StoneFruit,
      ].some((type) => item.type === type)
    );

    vegetablesInSeason = data.filter((item) =>
      [ProduceType.Vegetable, ProduceType.SpecialtyVegetable].some(
        (type) => item.type === type
      )
    );

    otherProduceInSeason = data.filter((item) =>
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
      <Nav />
      <div className="flex min-h-screen flex-col items-center justify-center bg-info">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-4xl font-bold tracking-wide text-secondary">
            Produce in season this{" "}
            <span className="font-bold text-primary">
              {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
            </span>
          </h1>
          {isLoading ? (
            <LoadingSpinner size={64} />
          ) : (
            <div className="flex flex-wrap gap-4">
              <div>
                <h4 className="text-lg font-bold text-primary">Fruit</h4>
                <ol className="text-black">
                  {fruitInSeason &&
                    fruitInSeason.map((fruit) => (
                      <li key={fruit.id}>
                        <Badge color="red">{fruit.type}</Badge> {fruit.title}
                      </li>
                    ))}
                </ol>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">Vegetables</h4>
                <ol className="text-black">
                  {vegetablesInSeason &&
                    vegetablesInSeason.map((vegetable) => (
                      <li key={vegetable.id}>
                        <Badge color="blue">{vegetable.type}</Badge>{" "}
                        {vegetable.title}
                      </li>
                    ))}
                </ol>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary">Other</h4>
                <ol className="text-black">
                  {otherProduceInSeason &&
                    otherProduceInSeason.map((item) => (
                      <li key={item.id}>
                        <Badge color="green">{item.type}</Badge> {item.title}
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Produce;
