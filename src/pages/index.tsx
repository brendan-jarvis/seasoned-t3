import { type NextPage } from "next";
import Head from "next/head";
import { SignedIn, SignedOut, SignInButton, useClerk } from "@clerk/nextjs";
import { AvailabilityType, ProduceType } from "@prisma/client";

import { Badge } from "~/components/Badge";
import { LoadingSpinner } from "~/components/LoadingSpinner";

import { api } from "~/utils/api";

const Home: NextPage = () => {
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

  const { user, signOut } = useClerk();

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-info">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary drop-shadow-md sm:text-[5rem]">
            Seasoned
          </h1>
          <SignedOut>
            <SignInButton>
              <button className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <h2 className="font-sans text-lg text-black">
              Welcome to Seasoned,{" "}
              <span className="text-primary">{user?.firstName}</span>!
            </h2>
            <button
              className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                void signOut();
              }}
            >
              Sign out
            </button>
          </SignedIn>
          <h3 className="text-2xl text-secondary">
            Produce in season this{" "}
            <span className="font-bold text-primary">
              {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
            </span>
          </h3>
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
      </main>
    </>
  );
};

export default Home;
