const calculator = (str: string): string => {
  str = str.split(" ").join("");
  const equation = str.match(/([\d+\-*/()^]+)/);
  try {
    const res = eval(equation![0].split("^").join("**"));
    return `${equation![0].split("").join(" ")} = ${res}`;
  } catch (e) {
    return "Sintaks persamaan tidak sesuai!";
  }
};

export default calculator;
