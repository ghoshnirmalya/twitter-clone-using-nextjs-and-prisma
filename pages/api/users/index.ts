import prisma from "lib/clients/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ reason: "Unauthorized" });
  }

  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
      });

      return res.status(200).json(users);
    } catch (error) {
      return res.status(422).json(error);
    }
  }

  res.end();
};
