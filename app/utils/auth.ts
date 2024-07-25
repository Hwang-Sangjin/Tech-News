import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions : NextAuthOptions = {
    adapter: <Adapter> PrismaAdapter(prisma),
  
      pages: {
        signIn: "/sign-in",
      },
      secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_CLIENT_ID as string,
          clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
      ],
}


// import NextAuth, {  NextAuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";

// import { PrismaAdapter } from "@auth/prisma-adapter";

// 
// import { Adapter } from "next-auth/adapters";

// const prisma = new PrismaClient()

// export const authOptions: NextAuthOptions  = {
//  
// };
