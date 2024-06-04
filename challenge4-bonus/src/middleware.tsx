import auth from "next-auth/middleware";

export default auth;

export const config = {
  matcher: ["/((?!api|static|_next/image|$).*)"],
};
