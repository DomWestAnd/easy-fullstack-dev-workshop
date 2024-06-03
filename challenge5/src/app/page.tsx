import SignIn from "~/components/signIn";
import SignOut from "~/components/signOut";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();
  return (
    <>
      <h1 className="pb-16 text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Easy <span className="text-[hsl(280,100%,70%)]">full-stack</span>{" "}
        development
      </h1>

      {session ? <SignOut /> : <SignIn />}
    </>
  );
}
