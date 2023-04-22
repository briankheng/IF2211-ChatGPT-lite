import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]";
import prisma from "@/libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const session = await getServerSession(options);

  if (!session) return res.status(401).end();

  const newChat = await prisma.chat.create({
    data: {
      user: { connect: { email: session?.user?.email as string } },
    },
  });

  res.status(200).json(newChat);
}
