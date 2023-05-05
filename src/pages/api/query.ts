import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { options } from "./auth/[...nextauth]";
import regex from "@/libs/algorithms/string-matching/regex";
import date from "@/libs/algorithms/date";
import calculator from "@/libs/algorithms/calculator";
import addHandler from "@/libs/handler/addHandler";
import deleteHandler from "@/libs/handler/deleteHandler";
import askHandler from "@/libs/handler/askHandler";
import prisma from "@/libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { query, method, chatId } = req.body;
  const session = await getServerSession(req, res, options);

  if (!session) return res.status(401).end();

  try {
    const queries: string[] = query.split(",");
    const responses: string[] = [];

    for (let i = 0; i < queries.length; i++) {
      const classification = regex(queries[i]);
      let response = "";

      switch (classification) {
        case "date":
          response = date(queries[i]);
          break;
        case "calculator":
          response = calculator(queries[i]);
          break;
        case "add":
          response = await addHandler(queries[i], session);
          break;
        case "delete":
          response = await deleteHandler(queries[i], session);
          break;
        case "ask":
          response = await askHandler(queries[i], method, session);
          break;

        default:
          response = "Maaf, saya tidak mengerti pertanyaan Anda.";
          break;
      }

      responses.push(response);
    }

    let finalResponse: string = "";
    if (responses.length == 1) {
      finalResponse = responses[0];
    } else {
      finalResponse = `${responses
        .map((response, index) => (index + 1).toString() + ". " + response)
        .join("\n\n")}`;
    }

    await prisma.message.create({
      data: {
        text: finalResponse,
        user: { connect: { email: "chatgpt@gmail.com" } },
        chat: { connect: { id: chatId } },
      },
    });

    res.status(200).json(finalResponse);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
