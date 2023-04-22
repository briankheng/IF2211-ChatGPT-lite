import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]";
import prisma from "@/libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") return res.status(405).end();

  const { chatId } = req.body;
  const session = await getServerSession(options);

  if (!session) return res.status(401).end();

  const deletedChat = await prisma.chat.delete({
    where: { id: chatId },
  });

  res.status(200).json(deletedChat);
}
