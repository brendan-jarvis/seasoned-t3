import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { PageLayout } from "~/components/Layout";
import { api } from "~/utils/api";
import { AvailabilityType } from "@prisma/client";

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

  const sortedProduce = data?.sort((a, b) => a.title.localeCompare(b.title));

  const uniqueProduce = [
    ...new Set(sortedProduce?.map((item) => item.title.split(" - ")[0])),
  ];

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
        <div className="flex min-h-screen flex-col items-center justify-center bg-info">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-primary drop-shadow-md sm:text-[5rem]">
              Seasoned
            </h1>
            <p className="font-sans text-sm text-gray-900">
              Search ingredients in season to find delicious recipes!
            </p>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-secondary">
                Seasonal Produce this{" "}
                {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
              </h2>
              <div className="grid max-w-2xl grid-flow-col gap-2 overflow-x-scroll p-2">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  uniqueProduce?.map((title, index) => (
                    <div
                      key={index}
                      className="w-32 rounded-lg text-gray-950 shadow-xl drop-shadow-lg"
                    >
                      <figure>
                        <Image
                          src="/images/inigo-de-la-maza-s285sDw5Ikc-unsplash.jpg"
                          width={500}
                          height={500}
                          alt={title ? title : "Produce"}
                          className="rounded-t-lg"
                        />
                      </figure>
                      <div className="">
                        <h2 className="mt-6 pb-0 text-center font-sans font-medium">
                          {title}
                        </h2>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
