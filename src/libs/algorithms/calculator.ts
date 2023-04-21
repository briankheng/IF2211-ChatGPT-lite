const calculator = (str: string): string => {
  str = str.split(" ").join("");
  const equation = str.match(/([\d+\-*/()^]+)/);

  try {
    const res = eval(equation ? equation[0] : "");
    return res.toString();
  } catch (e) {
    return "Sintaks persamaan tidak sesuai!";
  }
};

export default calculator;
