"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <button
      className="animate-bounce rounded-full bg-purple-500 p-4 text-3xl font-semibold transition hover:bg-purple-300"
      onMouseDown={() =>
        signIn("google", {
          callbackUrl: "/recipes",
        })
      }
    >
      Sign in
    </button>
  );
}
