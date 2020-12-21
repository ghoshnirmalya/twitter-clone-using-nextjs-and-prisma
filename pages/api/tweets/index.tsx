import prisma from "lib/prisma-client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { body } = req;
      const tweet = await prisma.tweet.create({ data: JSON.parse(body) });

      return res.status(200).json(tweet);
    } catch (error) {
      return res.status(422).json(error);
    }
  } else if (req.method === "GET") {
    try {
      const tweets = await prisma.tweet.findMany({
        include: {
          author: true,
        },
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
      });

      return res.status(200).json(tweets);
    } catch (error) {
      return res.status(422).json(error);
    }
  }
};
