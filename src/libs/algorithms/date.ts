const date = (text: string): string => {
  const date = text.match(/\b\d{2}\/\d{2}\/\d{4}\b/g);
  const splitDate = date![0].split("/");

  if (
    !isValidDate(
      parseInt(splitDate[2]),
      parseInt(splitDate[1]) - 1,
      parseInt(splitDate[0])
    )
  )
    return "Tanggal tidak valid!";

  const day = new Date(
    parseInt(splitDate[2]),
    parseInt(splitDate[1]) - 1,
    parseInt(splitDate[0])
  ).toLocaleDateString("id-ID", { weekday: "long" });

  return `Tanggal ${date![0]} adalah hari ${day}`;
};

export default date;

const isValidDate = (year: number, month: number, day: number): boolean => {
  var date = new Date(year, month, day);
  if (
    date.getFullYear() == year &&
    date.getMonth() == month &&
    date.getDate() == day
  ) {
    return true;
  }
  return false;
};
