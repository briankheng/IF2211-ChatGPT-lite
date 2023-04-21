const textCleaner = (text: string): string => {
  const { StopwordsId, StemmerId } = require("@nlpjs/lang-id");
  const stemmer = new StemmerId();
  stemmer.stopwords = new StopwordsId();

  return stemmer.tokenizeAndStem(text, false).join(" ");
};

export default textCleaner;
