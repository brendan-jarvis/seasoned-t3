import { useState } from "react";
import { toast } from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

import { LoadingSpinner } from "~/components/LoadingSpinner";
import { api } from "~/utils/api";

type TextInputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ label, placeholder, value, onChange }: TextInputProps) => {
  return (
    <div className="form-control w-full max-w-md p-2">
      <label className="label">
        <span className="label-text font-semibold text-gray-900">{label}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-bordered input w-full max-w-md"
      />
    </div>
  );
};

export const CreateRecipe = () => {
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
    ingredientSegments: [],
    instructions: [],
    tags: [],
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
        ingredientSegments: [],
        instructions: [],
        tags: [],
      });
      void ctx.recipes.getAll.invalidate();

      toast.success("Recipe added successfully!");
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors;
      const errorString = JSON.stringify(errorMessage, null, 4);

      if (errorMessage) {
        toast.error(errorString);
      } else {
        toast.error("Failed to post! Please try again later.");
      }
    },
  });

  if (!user) return null;

  return (
    <div className="flex max-w-md flex-col rounded-md bg-gray-400">
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
      {/* {input.ingredientSegments.length &&
        input.ingredientSegments.map((segment, i) => (
          <div key={i}>
            {segment.ingredients.map((ingredient, j) => (
              <div key={j}>
                <TextInput
                  label="Amount"
                  placeholder="Amount"
                  value={ingredient.amount}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      ingredientSegments: [
                        {
                          title: "",
                          ingredients: [
                            {
                              ...ingredient,
                              amount: e.target.value,
                            },
                          ],
                        },
                      ],
                    })
                  }
                />
                <TextInput
                  label="Unit"
                  placeholder="Unit"
                  value={ingredient.unit}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      ingredientSegments: [
                        {
                          title: "",
                          ingredients: [
                            {
                              ...ingredient,
                              unit: e.target.value,
                            },
                          ],
                        },
                      ],
                    })
                  }
                />
                <TextInput
                  label="Name"
                  placeholder="Name"
                  value={ingredient.name}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      ingredientSegments: [
                        {
                          title: "",
                          ingredients: [
                            {
                              ...ingredient,
                              name: e.target.value,
                            },
                          ],
                        },
                      ],
                    })
                  }
                />
              </div>
            ))}
          </div>
        ))} */}

      {/* <button className="btn-primary btn" onClick={() => mutate(input)}> */}
      <button className="btn-primary btn" onClick={() => console.log(input)}>
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
