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
    const userId = session!.user.id;

    await db.recipe.upsert({
      where: {
        name_createdById: { name: validation.data.name, createdById: userId },
      },
      update: validation.data,
      create: {
        createdById: userId,
        ...validation.data,
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
