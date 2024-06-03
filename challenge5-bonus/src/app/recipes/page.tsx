import RecipeList from "~/components/recipeList/RecipeList";

export default function RecipesPage() {
  return (
    <>
      <h1 className="pb-8 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Your recipes
      </h1>

      <RecipeList />
    </>
  );
}
