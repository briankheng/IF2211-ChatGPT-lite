const date = (text: string): string => {
  const date = text.match(/\b\d{2}\/\d{2}\/\d{4}\b/g);
  const splitDate = date![0].split("/");

  const day = new Date(
    parseInt(splitDate[2]),
    parseInt(splitDate[1]) - 1,
    parseInt(splitDate[0])
  ).toLocaleDateString("id-ID", { weekday: "long" });

  const res =
    day == "Invalid Date"
      ? "Tanggal tidak valid!"
      : `Tanggal ${date![0]} adalah hari ${day}`;

  return res;
};

export default date;
