import levenshteinDistance from "./levenshteinDistance";

const similarityCheck = (str1: string, str2: string): number => {
  const longer = str1.length > str2.length ? str1 : str2;
  if (longer.length === 0) {
    return 1.0;
  }

  return (
    (longer.length - levenshteinDistance(str1, str2)) /
    parseFloat(longer.length.toString())
  );
};

export default similarityCheck;
