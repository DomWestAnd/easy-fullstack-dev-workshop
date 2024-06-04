import { Suspense } from "react";
import RecipeListServerComponent from "./server";
import RecipeListLoading from "./loading";

export default function RecipeList() {
  return (
    <Suspense fallback={<RecipeListLoading />}>
      <RecipeListServerComponent />
    </Suspense>
  );
}
