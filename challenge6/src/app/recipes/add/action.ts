"use server";

import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";
import addRecipeSchema from "./schema";
import { redirect } from "next/navigation";
import delay from "~/delay";

export default async function addRecipeAction(
  _prevState: unknown,
  formData: FormData,
) {
  const validation = addRecipeSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    ingredients: formData.get("ingredients"),
    instructions: formData.get("instructions"),
  });

  if (validation.success) {
    const session = await getServerAuthSession();
    const userId = session?.user.id;
    await db.recipe.create({
      data: {
        createdById: userId!,
        name: validation.data.name,
        description: validation.data.description,
        ingredients: validation.data.ingredients,
        instructions: validation.data.instructions,
      },
    });

    await delay(3000);

    redirect("/recipes");
  } else {
    return {
      errors: validation.error.issues,
    };
  }
}
