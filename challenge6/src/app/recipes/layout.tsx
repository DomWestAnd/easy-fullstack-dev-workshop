import SignOut from "~/components/signOut";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full flex-row-reverse">
        <SignOut />
      </div>

      {children}
    </>
  );
}
