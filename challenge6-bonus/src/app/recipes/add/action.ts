"use server";

import genericActionHandler from "~/server/genericActionHandler";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";
import addRecipeSchema from "./schema";
import { redirect } from "next/navigation";
import delay from "~/delay";

export default async function addRecipeAction(
  _prevState: unknown,
  formData: FormData,
) {
  return genericActionHandler(addRecipeSchema, formData, async (data) => {
    const session = await getServerAuthSession();
    const userId = session!.user.id;

    await db.recipe.upsert({
      where: {
        name_createdById: { name: data.name, createdById: userId },
      },
      update: data,
      create: {
        createdById: userId,
        ...data,
      },
    });

    await delay(3000);

    redirect("/recipes");
  });
}
