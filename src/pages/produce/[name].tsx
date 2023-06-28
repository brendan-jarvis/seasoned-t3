import Head from "next/head";
import { useRouter } from "next/router";

import type { NextPage } from "next";
import { api } from "~/utils/api";

import { PageLayout } from "~/components/Layout";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import Image from "next/image";

const ViewProduce: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const { data: produce, isLoading } = api.seasonality.getOne.useQuery({
    name: name as string,
  });

  const capitaliseFirstLetters = (string: string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Seasoned - Recipes</title>
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
          <LoadingSpinner size={64} />
        </PageLayout>
      </>
    );
  }

  if (!produce) {
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
          <h1 className="p-4 text-center font-serif text-4xl font-bold tracking-wide text-seasoned-green">
            Unable to fetch produce
          </h1>
          <p className="text-center text-lg font-semibold text-destructive">
            Sorry, Seasoned was unable to load the produce.
          </p>
        </PageLayout>
      </>
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
        <div className="container">
          <div key={produce.id}>
            <h1 className="p-4 text-center font-serif text-4xl font-bold tracking-wide text-seasoned-green">
              {capitaliseFirstLetters(produce.name)}
            </h1>
            <div className="flex justify-center">
              <Image
                width={256}
                height={256}
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
            <h2>
              <span className="font-serif text-xl font-semibold">Season</span>
            </h2>
            <ul>
              {Object.entries(produce).map(([month, availability], index) => {
                if (availability === "Available") {
                  return <li key={index}>{month}</li>;
                }
                return null;
              })}
            </ul>
            <h2>
              <span className="font-serif text-xl font-semibold">
                Varieties
              </span>
            </h2>
            <ul>
              {produce.Produce.map((variety) => (
                <li key={variety.id}>{variety.title}</li>
              ))}
            </ul>
            <pre className="overflow-scroll">
              {JSON.stringify(produce, null, 2)}
            </pre>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ViewProduce;
