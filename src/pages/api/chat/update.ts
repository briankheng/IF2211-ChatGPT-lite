import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]";
import prisma from "@/libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") return res.status(405).end();

  const { chatId, title } = req.body;
  const session = await getServerSession(req, res, options);

  if (!session) return res.status(401).end();

  try {
    const editedChat = await prisma.chat.update({
      where: { id: chatId },
      data: { title: title } as any,
    });

    res.status(200).json(editedChat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
