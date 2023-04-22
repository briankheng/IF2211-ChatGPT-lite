import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]";
import prisma from "@/libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(405).end();

  const session = await getServerSession(req, res, options);

  if (!session) return res.status(401).end();

  const messages = await prisma.message.findMany({
    where: {
      chatId: req.query.id as string,
    },
    include: {
        user: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  res.status(200).json(messages);
}
