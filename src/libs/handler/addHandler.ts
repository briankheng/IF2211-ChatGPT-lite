import textCleaner from "../algorithms/textCleaner";
import kmp from "../algorithms/string-matching/kmp";
import similarityCheck from "../algorithms/string-matching/similarityCheck";

type QnA = {
  id: string;
  question: string;
  answer: string;
  userId: string | null;
};

type QnAWithPercentage = QnA & { similarityPercentage: number };

const addHandler = async (query: string, session: any): Promise<string> => {
  let question = query.split("pertanyaan")[1].split("dengan")[0].trim();
  let answer = query.split("jawaban")[1].trim();

  question = textCleaner(question);

  const userQnA = await prisma.qnA.findMany({
    where: {
      user: { email: session?.user?.email as string },
    },
  });
  const QnAs_with_percentage: QnAWithPercentage[] = [];

  let existQuestion: QnA | QnAWithPercentage | undefined;
  userQnA.forEach((QnA) => {
    if (kmp(QnA.question, question)) {
      existQuestion = QnA;
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

  if (
    !existQuestion &&
    QnAs_with_percentage.length > 0 &&
    QnAs_with_percentage[0].similarityPercentage > 0.9
  ) {
    existQuestion = QnAs_with_percentage[0];
  }

  if (existQuestion) {
    await prisma.qnA.update({
      where: {
        id: existQuestion.id,
      },
      data: {
        answer,
      },
    });

    return `Pertanyaan sudah ada! Jawaban di update ke ${answer}`;
  } else {
    await prisma.qnA.create({
      data: {
        question,
        answer,
        user: { connect: { email: session?.user?.email as string } },
      },
    });

    return `Pertanyaan berhasil ditambahkan!`;
  }
};

export default addHandler;
