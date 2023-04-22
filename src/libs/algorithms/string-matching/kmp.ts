const kmp = (text: string, pattern: string): boolean => {
  const borderTable = borderFunction(pattern);
  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        return true;
      }
      i++;
      j++;
    } else if (j > 0) {
      j = borderTable[j - 1];
    } else {
      i++;
    }
  }

  return false;
};

const borderFunction = (pattern: string): number[] => {
  const borderTable = [0];
  let i = 1;
  let j = 0;

  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      borderTable[i] = j + 1;
      i++;
      j++;
    } else if (j > 0) {
      j = borderTable[j - 1];
    } else {
      borderTable[i] = 0;
      i++;
    }
  }

  return borderTable;
};

export default kmp;
