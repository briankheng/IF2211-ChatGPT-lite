const textCleaner = (text: string): string => {
  const { NormalizerId, TokenizerId, StopwordsId } = require("@nlpjs/lang-id");

  const normalizer = new NormalizerId();
  const tokenizer = new TokenizerId();
  const stopwords = new StopwordsId();

  return stopwords
    .removeStopwords(tokenizer.tokenize(normalizer.normalize(text)))
    .join(" ");
};

export default textCleaner;
