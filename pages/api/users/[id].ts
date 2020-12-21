import prisma from "lib/prisma-client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const userId = parseInt(req.query.id as string);

    try {
      const tweets = await prisma.user.findUnique({
        include: {
          tweets: true,
        },
        where: {
          id: userId,
        },
      });

      return res.status(200).json(tweets);
    } catch (error) {
      console.log(error);

      return res.status(422).json(error);
    }
  }
};
