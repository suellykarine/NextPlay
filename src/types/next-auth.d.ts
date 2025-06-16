import NextAuth, { DefaultSession } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      initials?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }

  declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
      initials?: string;
    }
  }
}
