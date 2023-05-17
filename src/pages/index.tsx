import { type NextPage } from "next";
import Head from "next/head";

import { PageLayout } from "~/components/Layout";

const Home: NextPage = () => {
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
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
