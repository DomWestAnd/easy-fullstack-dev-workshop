import { getServerAuthSession } from "~/server/auth";
import RecipeListComponent from "./component";
import { db } from "~/server/db";
import delay from "~/delay";

export default async function RecipeListServerComponent() {
  const session = await getServerAuthSession();
  const recipes = await db.recipe.findMany({
    where: {
      createdById: session?.user?.id,
    },
  });

  // Simulate a delay in fetching data from the database
  await delay(3000);

  return <RecipeListComponent recipes={recipes} />;
}
