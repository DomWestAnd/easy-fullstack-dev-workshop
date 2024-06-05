"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button onMouseDown={() => router.back()} className="text-xl underline">
      Back
    </button>
  );
}
