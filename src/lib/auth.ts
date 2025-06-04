// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { compare } from "bcryptjs";
// import { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { db } from "./prisma";

// export const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(db),
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials.password) {
//           throw new Error("Email e senha são obrigatórios");
//         }

//         const user = await db.user.findUnique({
//           where: { email: credentials.email },
//         });

//         if (!user || !user.password) {
//           throw new Error("Email ou senha inválidos");
//         }

//         const isValid = await compare(credentials.password, user.password);

//         if (!isValid) {
//           throw new Error("Email ou senha inválidos");
//         }

//         return user;
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token && session.user) {
//         session.user.id = token.id as string;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/login",
//   },
// };
