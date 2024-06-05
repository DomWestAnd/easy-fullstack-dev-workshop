"use client";

import { useFormState } from "react-dom";
import addRecipeAction from "./action";
import ErrorMessages from "~/components/ErrorMessages";

export default function AddRecipeForm() {
  const [state, formAction] = useFormState(addRecipeAction, {});

  return (
    <form action={formAction} className="flex w-full flex-col gap-2 py-2">
      <div className="flex flex-col p-1">
        <label htmlFor="name">Enter recipe name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="rounded-3xl p-2 text-black"
        />
        <ErrorMessages errors={state.name} />
      </div>

      <div className="flex flex-col p-1">
        <label htmlFor="description">Enter description</label>
        <textarea
          id="description"
          name="description"
          className="h-32 rounded-3xl p-1 text-black"
        />
        <ErrorMessages errors={state.description} />
      </div>

      <div className="flex flex-col p-1">
        <label htmlFor="ingredients">Enter ingredients</label>
        <textarea
          id="ingredients"
          name="ingredients"
          className="h-96 rounded-3xl p-1 text-black"
        />
        <ErrorMessages errors={state.ingredients} />
      </div>

      <div className="flex flex-col p-1">
        <label htmlFor="instructions">Enter instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          className="h-96 rounded-3xl p-1 text-black"
        />
        <ErrorMessages errors={state.instructions} />
      </div>

      <hr className="my-10 border-t-0" />

      <div className="fixed left-[calc(50%-6rem)] top-[calc(100%-5rem)] z-10 h-0">
        <button
          type="submit"
          className="w-48 rounded-full bg-purple-600 py-3 text-2xl font-semibold no-underline transition hover:bg-purple-500"
        >
          Add recipe
        </button>
      </div>
    </form>
  );
}
