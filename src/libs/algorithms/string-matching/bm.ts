const bm = (text: string, pattern: string): boolean => {
  const lastOccurrence = lastOccurrenceFunction(pattern);
  let i = pattern.length - 1;
  let j = pattern.length - 1;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === 0) {
        return true;
      }
      i--;
      j--;
    } else {
      i +=
        pattern.length - Math.min(j, 1 + lastOccurrence[text[i].charCodeAt(0)]);
      j = pattern.length - 1;
    }
  }

  return false;
};

const lastOccurrenceFunction = (pattern: string): number[] => {
  const lastOccurrence: number[] = [];

  for (let i = 0; i < 256; i++) {
    lastOccurrence.push(-1);
  }

  for (let i = 0; i < pattern.length; i++) {
    lastOccurrence[pattern[i].charCodeAt(0)] = i;
  }

  return lastOccurrence;
};

export default bm;
