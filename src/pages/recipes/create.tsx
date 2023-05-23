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
        <SignedIn>
          <h1 className="p-4 text-center font-serif text-4xl font-bold tracking-wide text-foreground">
            Create a recipe!
          </h1>
          <CreateRecipe />
        </SignedIn>
        <SignedOut>
          <h1 className="p-4 text-center font-serif text-4xl font-bold tracking-wide text-foreground">
            Sign in to create a recipe!
          </h1>
          <p className="text-center text-2xl text-foreground">
            Please sign in to create a recipe.
          </p>
        </SignedOut>
      </PageLayout>
    </>
  );
};

export default Create;
