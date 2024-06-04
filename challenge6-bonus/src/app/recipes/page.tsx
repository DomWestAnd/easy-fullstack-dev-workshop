import Link from "next/link";
import RecipeList from "~/components/recipeList/RecipeList";

export default function RecipesPage() {
  return (
    <>
      <h1 className="pb-8 text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Your recipes
      </h1>

      <RecipeList />

      <div className="fixed top-[calc(100%-5rem)] z-10 h-0">
        <Link
          href="/recipes/add"
          className="rounded-full bg-purple-600 px-10 py-3 text-2xl font-semibold no-underline transition hover:bg-purple-500"
        >
          + Add
        </Link>
      </div>
    </>
  );
}
