export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/((?!api|static|_next/image|$).*)"],
};
