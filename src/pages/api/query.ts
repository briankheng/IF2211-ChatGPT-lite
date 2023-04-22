import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { options } from "./auth/[...nextauth]";
import regex from "@/libs/algorithms/string-matching/regex";
import date from "@/libs/algorithms/date";
import calculator from "@/libs/algorithms/calculator";
import addHandler from "@/libs/handler/addHandler";
import deleteHandler from "@/libs/handler/deleteHandler";
import askHandler from "@/libs/handler/askHandler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { query, method, chatId } = req.body;
  const session = await getServerSession(req, res, options);

  if (!session) return res.status(401).end();

  await prisma.message.create({
    data: {
      text: query,
      createdBy: { connect: { email: session?.user?.email as string } },
      chat: { connect: { id: chatId } },
    },
  });

  const classification = regex(query);
  let response = "";

  switch (classification) {
    case "date":
      response = date(query);
      break;
    case "calculator":
      response = calculator(query);
      break;
    case "add":
      response = await addHandler(query, session);
      break;
    case "delete":
      response = await deleteHandler(query, session);
      break;
    case "ask":
      response = await askHandler(query, method, session);
      break;

    default:
      response = "Maaf, saya tidak mengerti pertanyaan Anda.";
      break;
  }

  await prisma.message.create({
    data: {
      text: response,
      createdBy: { connect: { email: "chatgpt@gmail.com" } },
      chat: { connect: { id: chatId } },
    },
  });

  res.status(200).json(response);
}
