import delay from "~/delay";
import { db } from "~/server/db";

type RecipePageProps = {
  params: {
    recipeId: string;
  };
};

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await db.recipe.findUniqueOrThrow({
    where: { id: Number(params.recipeId) },
  });

  // Simulate a delay in fetching data from the database
  await delay(3000);

  return (
    <div className="flex flex-col gap-4 whitespace-pre-line">
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          {recipe.name}
        </h1>
        <h2 className="text-base">{recipe.description}</h2>
      </div>

      <div>
        <h3 className="justify-start text-3xl">Ingredients</h3>
        <p>{recipe.ingredients}</p>
      </div>

      <div>
        <h3 className="justify-start text-3xl">Method</h3>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}
