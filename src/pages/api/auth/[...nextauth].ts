import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../libs/prisma";

// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
const authHandler: NextApiHandler = async (req, res) => {
  try {
    console.log("disiniiiiiiiii woyyy");
    await NextAuth(req, res, options);
    // If NextAuth does not throw an error, sign-in was successful
    res.redirect('/chat/chat');
  } catch (error) {
    // If NextAuth throws an error, sign-in failed
    res.redirect('/chat/chat');
  }
};

export default authHandler;

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
};
