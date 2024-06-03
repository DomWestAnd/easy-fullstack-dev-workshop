export default function RecipeListLoading() {
  return (
    <div className="flex w-full flex-col gap-4">
      <FakeRecipeRow />
      <FakeRecipeRow />
      <FakeRecipeRow />
      <FakeRecipeRow />
      <FakeRecipeRow />
    </div>
  );
}

function FakeRecipeRow() {
  return <div className="h-36 rounded-full bg-white/20 p-6" />;
}
