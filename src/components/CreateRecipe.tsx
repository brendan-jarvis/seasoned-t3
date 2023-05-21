import { useState } from "react";
import { toast } from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

import { LoadingSpinner } from "~/components/LoadingSpinner";
import { api } from "~/utils/api";

type TextInputProps = {
  label: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  label,
  placeholder,
  value,
  required,
  onChange,
}: TextInputProps) => {
  return (
    <div className="form-control mb-2 w-full p-1">
      <label className="label">
        <span className="mb-1 block font-serif font-bold text-gray-700">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // className="input-bordered input w-full"
        className="focus:shadow-outline text-info w-full rounded-md px-4 py-3 font-serif font-light shadow-sm focus:outline-none"
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
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center rounded-md bg-gray-100 px-8">
      <TextInput
        label="Title"
        placeholder="Enter recipe title"
        value={input.title}
        required={true}
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      />
      <TextInput
        label="Byline"
        placeholder="Enter author name"
        value={input.byline}
        required={true}
        onChange={(e) => setInput({ ...input, byline: e.target.value })}
      />
      <TextInput
        label="Serves"
        placeholder="Enter number of servings"
        value={input.serves}
        onChange={(e) => setInput({ ...input, serves: e.target.value })}
      />
      <TextInput
        label="Prep Time"
        placeholder="Enter preparation time e.g. 20 minutes"
        value={input.prepTime}
        onChange={(e) => setInput({ ...input, prepTime: e.target.value })}
      />
      <TextInput
        label="Cook Time"
        placeholder="Enter cooking time e.g. 30 minutes"
        value={input.cookTime}
        onChange={(e) => setInput({ ...input, cookTime: e.target.value })}
      />
      <TextInput
        label="Total Time"
        placeholder="Enter total time e.g. 50 minutes"
        value={input.totalTime}
        onChange={(e) => setInput({ ...input, totalTime: e.target.value })}
      />
      <TextInput
        label="Source URL"
        placeholder="Enter source URL"
        value={input.sourceURL}
        onChange={(e) => setInput({ ...input, sourceURL: e.target.value })}
      />
      <TextInput
        label="Description"
        placeholder="Enter recipe description"
        value={input.description}
        onChange={(e) => setInput({ ...input, description: e.target.value })}
      />
      <TextInput
        label="Image"
        placeholder="Enter image URL"
        value={input.image}
        required={true}
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
      <Button
        variant="ghost"
        onClick={() => toast.success(JSON.stringify(input, null, 2))}
      >
        Submit
      </Button>
      {isPosting && (
        <div className="flex items-center justify-center">
          <LoadingSpinner size={20} />
        </div>
      )}
    </div>
  );
};
