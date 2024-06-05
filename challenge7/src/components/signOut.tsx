"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="whitespace-nowrap rounded-full bg-purple-500 p-4 text-3xl font-semibold transition hover:bg-purple-300"
      onMouseDown={() => signOut({ callbackUrl: "/" })}
    >
      Sign out
    </button>
  );
}
