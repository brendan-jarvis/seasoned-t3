import { type NextPage } from "next";
import Head from "next/head";
import { SignedIn, SignedOut, SignInButton, useClerk } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const produce = api.produce.getAll.useQuery();
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
              <button className="rounded bg-blue-500 px-4 py-2 font-bold text-info hover:bg-blue-700">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <h2 className="font-sans text-lg text-black">
              Welcome to Seasoned,{" "}
              <span className="text-primary">{user?.firstName}</span>!
            </h2>
            {/* Signout button */}
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold text-info hover:bg-blue-700"
              onClick={() => {
                void signOut();
              }}
            >
              Sign out
            </button>
          </SignedIn>
          <h3 className="text-2xl text-secondary">Produce</h3>
          <ul className="text-black">
            {produce.data &&
              produce.data.map((p) => (
                <li key={p.produce.id}>
                  {p.produce.id}. {p.produce.title}
                </li>
              ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
