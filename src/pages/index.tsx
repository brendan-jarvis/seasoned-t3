import { type NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { PageLayout } from "~/components/Layout";
import { api } from "~/utils/api";
import { AvailabilityType } from "@prisma/client";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import { Search } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useRef } from "react";

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

  const availabilityTypes = [
    { label: "available", value: AvailabilityType.Available },
    { label: "availabile (limited)", value: AvailabilityType.Limited },
    { label: "imported", value: AvailabilityType.Imported },
    { label: "imported (limited)", value: AvailabilityType.LimitedImported },
    { label: "unavailable", value: AvailabilityType.Unavailable },
  ];

  const [selectedAvailability, setSelectedAvailability] =
    useState<AvailabilityType>(AvailabilityType.Available);

  const { data, isLoading } = api.produce.getAllByMonth.useQuery({
    month: currentMonth,
    availability: [selectedAvailability],
  });

  const handleAvailabilityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value as AvailabilityType;
    setSelectedAvailability(selectedValue);
  };

  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchRef.current) {
      void router.push(`/search/${searchRef.current.value}`);
    }
  };

  const ProduceCarousel = () => {
    const sortedProduce = data?.sort((a, b) => a.title.localeCompare(b.title));

    const uniqueProduce = [
      ...new Set(sortedProduce?.map((item) => item.title.split(" - ")[0])),
    ];

    return (
      <div className="flex justify-center">
        <div className="grid h-auto grid-flow-col gap-1 overflow-y-hidden overflow-x-scroll rounded-md">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            uniqueProduce?.map((title, index) => (
              <div
                key={index}
                className="h-32 w-32 rounded-lg border bg-card text-card-foreground shadow-sm"
              >
                <Image
                  src="/images/inigo-de-la-maza-s285sDw5Ikc-unsplash.jpg"
                  width={200}
                  height={200}
                  alt={title ? title : "Produce"}
                  className="rounded-t-lg"
                />
                <h2 className="justify-center text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {title}
                </h2>
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
              <div className="flex w-full max-w-sm justify-center space-x-2 text-center">
                <Input type="text" ref={searchRef} placeholder="Search" />
                <Button variant="ghost" type="submit">
                  <Search />
                </Button>
              </div>
            </form>
          </div>
          <div className="container">
            <div>
              <h2 className="mb-2 text-xl font-bold tracking-tight text-seasoned-green">
                Produce{" "}
                <select
                  value={selectedAvailability}
                  onChange={handleAvailabilityChange}
                >
                  {availabilityTypes.map((availability) => (
                    <option
                      key={availability.label}
                      value={availability.value}
                      selected={selectedAvailability === availability.value}
                    >
                      {availability.label}
                    </option>
                  ))}
                </select>{" "}
                this{" "}
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
