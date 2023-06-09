import { type NextPage } from "next";
import Head from "next/head";
import type { Favourite } from "@prisma/client";

import { PageLayout } from "~/components/Layout";
import { LoadingSpinner } from "~/components/LoadingSpinner";

import { api } from "~/utils/api";

const Favourites: NextPage = () => {
  const { data: favourites, isLoading } = api.favourites.getAll.useQuery() as {
    data: Favourite[];
    isLoading: boolean;
  };

  if (isLoading) {
    return (
      <PageLayout>
        <LoadingSpinner size={64} />
      </PageLayout>
    );
  }

  console.log(favourites);

  return (
    <>
      <Head>
        <title>Seasoned - Favourites</title>
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
          Favourites
        </h1>
      </PageLayout>
    </>
  );
};

export default Favourites;
