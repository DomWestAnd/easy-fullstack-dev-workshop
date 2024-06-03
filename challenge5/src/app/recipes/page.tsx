import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

export default async function RecipesPage() {
  const session = await getServerAuthSession();
  const recipes = await db.recipe.findMany({
    where: {
      createdById: session?.user.id,
    },
  });

  // Simulate a delay in fetching data from the database
  await delay(3000);

  return (
    <>
      <h1 className="pb-8 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Your recipes
      </h1>

      <div className="flex w-full flex-col gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="rounded-full bg-white/20 p-6">
            <h2 className="p-1 text-2xl font-extrabold sm:text-4xl">
              {recipe.name}
            </h2>
            <p className="p-1 text-xs sm:text-sm">{recipe.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
