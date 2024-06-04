import { type Recipe } from "@prisma/client";

type RecipeListProps = {
  recipes: Recipe[];
};

export default function RecipeListComponent({ recipes }: RecipeListProps) {
  return (
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
  );
}
