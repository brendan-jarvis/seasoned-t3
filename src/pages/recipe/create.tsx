import { type NextPage } from "next";
import Head from "next/head";

import { PageLayout } from "~/components/Layout";

import { SignedIn, SignedOut } from "@clerk/nextjs";

import { CreateRecipe } from "~/components/CreateRecipe";

const Create: NextPage = () => {
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
        <h1 className="p-4 text-center text-4xl font-bold tracking-wide text-secondary">
          Recipes
        </h1>
        <SignedIn>
          <p className="text-center text-2xl text-secondary">
            You are signed in!
          </p>
          <CreateRecipe />
        </SignedIn>
        <SignedOut>
          <p className="text-center text-2xl text-secondary">
            You are not signed in! Please sign in to create a recipe.
          </p>
        </SignedOut>
      </PageLayout>
    </>
  );
};

export default Create;
