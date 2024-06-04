import SignIn from "~/components/signIn";
import SignOut from "~/components/signOut";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Easy <span className="text-[hsl(280,100%,70%)]">full-stack</span>{" "}
        development
      </h1>

      {session ? <SignOut /> : <SignIn />}
    </div>
  );
}
