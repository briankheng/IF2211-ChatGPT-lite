import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]";
import prisma from "@/libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { text, chatId } = req.body;
  const session = await getServerSession(req, res, options);

  if (!session) return res.status(401).end();

  const newMessage = await prisma.message.create({
    data: {
      text: text,
      user: { connect: { email: session?.user?.email as string } },
      chat: { connect: { id: chatId } },
    },
  });

  res.status(200).json(newMessage);
}
