import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { PageLayout } from "~/components/Layout";
import { LoadingSpinner } from "~/components/LoadingSpinner";

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";

type TextInputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ label, placeholder, value, onChange }: TextInputProps) => {
  return (
    <>
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-bordered input w-full max-w-md"
      />
    </>
  );
};

const CreateRecipe = () => {
  const { user } = useUser();

  const [input, setInput] = useState({
    title: "",
    byline: "",
    serves: "",
    prepTime: "",
    cookTime: "",
    totalTime: "",
    sourceURL: "",
    description: "",
    image: "",
    ingredientSegments: [
      {
        ingredients: [
          {
            amount: "",
            unit: "",
            name: "",
          },
        ],
      },
    ],
    instructions: [
      {
        name: "",
        quantity: "",
        unit: "",
      },
    ],
  });

  const ctx = api.useContext();

  const { mutate, isLoading: isPosting } = api.recipes.create.useMutation({
    onSuccess: () => {
      setInput({
        title: "",
        byline: "",
        serves: "",
        prepTime: "",
        cookTime: "",
        totalTime: "",
        sourceURL: "",
        description: "",
        image: "",
        ingredientSegments: [
          {
            ingredients: [
              {
                amount: "",
                unit: "",
                name: "",
              },
            ],
          },
        ],
        instructions: [
          {
            name: "",
            quantity: "",
            unit: "",
          },
        ],
      });
      void ctx.recipes.getAll.invalidate();

      return (
        <div className="toast-end toast toast-top">
          <div className="alert alert-success">
            <div>
              <p>Recipe added successfully!</p>
            </div>
          </div>
        </div>
      );
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;

      if (errorMessage && errorMessage[0]) {
        return (
          <div className="toast-end toast toast-top">
            <div className="alert alert-error">
              <div>
                <p>{errorMessage[0]}</p>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="toast-end toast toast-top">
            <div className="alert alert-error">
              <div>
                <p>Failed to post! Please try again later.</p>
              </div>
            </div>
          </div>
        );
      }
    },
  });

  if (!user) return null;

  return (
    <div className="form-control w-full max-w-md">
      <TextInput
        label="Title"
        placeholder="Title"
        value={input.title}
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      />
      <TextInput
        label="Byline"
        placeholder="Byline"
        value={input.byline}
        onChange={(e) => setInput({ ...input, byline: e.target.value })}
      />
      <TextInput
        label="Serves"
        placeholder="Serves"
        value={input.serves}
        onChange={(e) => setInput({ ...input, serves: e.target.value })}
      />
      <TextInput
        label="Prep Time"
        placeholder="Prep Time"
        value={input.prepTime}
        onChange={(e) => setInput({ ...input, prepTime: e.target.value })}
      />
      <TextInput
        label="Cook Time"
        placeholder="Cook Time"
        value={input.cookTime}
        onChange={(e) => setInput({ ...input, cookTime: e.target.value })}
      />
      <TextInput
        label="Total Time"
        placeholder="Total Time"
        value={input.totalTime}
        onChange={(e) => setInput({ ...input, totalTime: e.target.value })}
      />
      <TextInput
        label="Source URL"
        placeholder="Source URL"
        value={input.sourceURL}
        onChange={(e) => setInput({ ...input, sourceURL: e.target.value })}
      />
      <TextInput
        label="Description"
        placeholder="Description"
        value={input.description}
        onChange={(e) => setInput({ ...input, description: e.target.value })}
      />
      <TextInput
        label="Image"
        placeholder="Image"
        value={input.image}
        onChange={(e) => setInput({ ...input, image: e.target.value })}
      />
      <TextInput
        label="Ingredients"
        placeholder="Ingredients"
        value={input.ingredientSegments}
        onChange={(e) =>
          setInput({ ...input, ingredientSegments: e.target.value })
        }
      />
      <TextInput
        label="Instructions"
        placeholder="Instructions"
        value={input.instructions}
        onChange={(e) => setInput({ ...input, instructions: e.target.value })}
      />
      <TextInput
        label="Tags"
        placeholder="Tags"
        value={input.tags}
        onChange={(e) => setInput({ ...input, tags: e.target.value })}
      />

      <button className="btn-primary btn" onSubmit={void console.log(input)}>
        Submit
      </button>
      {isPosting && (
        <div className="flex items-center justify-center">
          <LoadingSpinner size={20} />
        </div>
      )}
    </div>
  );
};

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
