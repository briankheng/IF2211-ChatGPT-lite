import textCleaner from "../algorithms/textCleaner";
import kmp from "../algorithms/string-matching/kmp";
import bm from "../algorithms/string-matching/bm";
import similarityCheck from "../algorithms/string-matching/similarityCheck";

type QnA = {
  id: string;
  question: string;
  answer: string;
  userId: string | null;
};

type QnAWithPercentage = QnA & { similarityPercentage: number };

const askHandler = async (
  question: string,
  method: string,
  session: any
): Promise<string> => {
  question = textCleaner(question);

  const userQnA = await prisma.qnA.findMany({
    where: {
      user: { email: session?.user?.email as string },
    },
  });
  const globalQnA = await prisma.qnA.findMany({
    where: {
      userId: null,
    },
  });

  const QnAs = [...userQnA, ...globalQnA];
  const QnAs_with_percentage: QnAWithPercentage[] = [];

  let answer: string | undefined;

  QnAs.forEach((QnA) => {
    const exactMatching =
      method === "kmp"
        ? kmp(QnA.question, question)
        : bm(QnA.question, question);

    if (exactMatching) {
      answer = QnA.answer;
    } else {
      const similarityPercentage = similarityCheck(QnA.question, question);
      QnAs_with_percentage.push({
        ...QnA,
        similarityPercentage,
      });
    }
  });

  QnAs_with_percentage.sort(
    (a, b) => b.similarityPercentage - a.similarityPercentage
  );

  if (answer) return answer;
  else if (QnAs_with_percentage.length === 0) {
    return `Pertanyaan tidak ditemukan di database!`;
  } else if (QnAs_with_percentage[0].similarityPercentage > 0.9) {
    return QnAs_with_percentage[0].answer;
  } else {
    return `Pertanyaan tidak ditemukan di database!\nApakah maksud anda:\n${QnAs_with_percentage.slice(
      0,
      Math.min(3, QnAs_with_percentage.length)
    )
      .map((QnA, index) => (index + 1).toString() + ". " + QnA.question + "?")
      .join("\n")}
            `;
  }
};

export default askHandler;