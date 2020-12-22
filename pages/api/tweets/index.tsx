import prisma from "lib/clients/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ reason: "Unauthorized" });
  }

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

  res.end();
};
