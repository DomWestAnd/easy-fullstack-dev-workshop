"use client";

import { useFormState } from "react-dom";
import addRecipeAction from "./action";
import ErrorMessages from "~/components/ErrorMessages";
import SubmitButton from "~/components/SubmitButton";

export default function AddRecipeForm() {
  const [state, formAction] = useFormState(addRecipeAction, { errors: [] });

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
        <ErrorMessages fieldName="name" errors={state.errors} />
      </div>

      <div className="flex flex-col p-1">
        <label htmlFor="description">Enter description</label>
        <textarea
          id="description"
          name="description"
          className="h-32 rounded-3xl p-1 text-black"
        />
        <ErrorMessages fieldName="description" errors={state.errors} />
      </div>

      <div className="flex flex-col p-1">
        <label htmlFor="ingredients">Enter ingredients</label>
        <textarea
          id="ingredients"
          name="ingredients"
          className="h-96 rounded-3xl p-1 text-black"
        />
        <ErrorMessages fieldName="ingredients" errors={state.errors} />
      </div>

      <div className="flex flex-col p-1">
        <label htmlFor="instructions">Enter instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          className="h-96 rounded-3xl p-1 text-black"
        />
        <ErrorMessages fieldName="instructions" errors={state.errors} />
      </div>

      <hr className="my-10 border-t-0" />

      <SubmitButton />
    </form>
  );
}
