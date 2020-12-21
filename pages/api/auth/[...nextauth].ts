import prisma from "lib/prisma-client";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_KEY,
      clientSecret: process.env.TWITTER_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
