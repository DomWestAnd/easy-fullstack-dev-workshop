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
  return (
    <div className="h-36 rounded-full bg-white/20 p-6">
      <div className="mb-2.5 h-6 w-56 rounded-full bg-white/50 sm:h-9" />

      <div className="space-y-1">
        <div className="flex w-full items-center">
          <div className="h-2.5 w-32 rounded-full bg-white/30" />
          <div className="ms-2 h-2.5 w-24 rounded-full bg-white/40" />
          <div className="ms-2 h-2.5 w-full rounded-full bg-white/40" />
        </div>
        <div className="flex w-full items-center">
          <div className="h-2.5 w-full rounded-full bg-white/30" />
          <div className="ms-2 h-2.5 w-full rounded-full bg-white/40" />
          <div className="ms-2 h-2.5 w-24 rounded-full bg-white/40" />
        </div>
        <div className="flex w-full max-w-[560px] items-center">
          <div className="h-2.5 w-full rounded-full bg-white/40" />
          <div className="ms-2 h-2.5 w-80 rounded-full bg-white/30" />
          <div className="ms-2 h-2.5 w-full rounded-full bg-white/40" />
        </div>
      </div>
    </div>
  );
}
