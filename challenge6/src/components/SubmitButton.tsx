"use client";

import { useFormStatus } from "react-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function SubmitButton() {
  const formStatus = useFormStatus();

  return (
    <div className="fixed left-[calc(50%-6rem)] top-[calc(100%-5rem)] z-10 h-0">
      <button
        type="submit"
        className="w-48 rounded-full bg-purple-600 py-3 text-2xl font-semibold no-underline transition hover:bg-purple-500"
        disabled={formStatus.pending}
      >
        {formStatus.pending ? <LoadingSpinner /> : "Add recipe"}
      </button>
    </div>
  );
}
