"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="animate-bounce rounded-full bg-purple-300 p-4 text-3xl font-semibold transition hover:bg-purple-500"
      onMouseDown={() => signOut({ callbackUrl: "/" })}
    >
      Sign out
    </button>
  );
}
