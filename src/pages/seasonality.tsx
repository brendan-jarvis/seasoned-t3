import { type NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { PageLayout } from "~/components/Layout";
import { api } from "~/utils/api";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import { Button } from "~/components/ui/button";

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

  const { data, isLoading } = api.seasonality.getAll.useQuery();

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
          </div>
          <div className="container">
            <div>
              <h2
                className="mb-2 text-xl font-bold tracking-tight text-seasoned-green"
                style={{ whiteSpace: "pre-line" }}
              >
                Produce
              </h2>
              <p>
                {data?.map((produce, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-64 w-64 object-cover object-center">
                      <Image
                        width={128}
                        height={128}
                        alt={produce.name ? produce.name : "Produce"}
                        src={`/images/produce/${
                          produce.name
                            ? produce.name
                                .toLowerCase()
                                .replaceAll(" - ", "-")
                                .replaceAll(" ", "-")
                            : "/images/produce.jpg"
                        }.jpg`}
                        quality={50}
                        className="rounded-lg"
                      />
                    </div>
                    <h2 className="ml-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {produce.name}
                    </h2>
                  </div>
                ))}
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
