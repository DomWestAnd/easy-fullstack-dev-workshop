import BackButton from "~/components/BackButton";
import SignOut from "~/components/signOut";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full flex-row justify-between">
        <BackButton />
        <SignOut />
      </div>

      {children}
    </>
  );
}
