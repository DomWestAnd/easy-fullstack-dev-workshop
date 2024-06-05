import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <main>
            <div className="scrollbar-hide flex min-h-screen flex-col items-center justify-start overflow-hidden text-white">
              <div className="container flex flex-col items-center justify-center px-2 py-4">
                {children}
              </div>
            </div>
          </main>
        </body>
      </html>
    </>
  );
}
