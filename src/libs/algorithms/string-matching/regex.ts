const regex = (str: string): string => {
  str = str.toLowerCase();

  if (
    str.match(/^.*(\d{2}\/\d{2}\/\d{4}).*$/) !== null) {
    return "date";
  } else if (
    str.match(/^.*[0-9]+\s*[\+\-\*\^\/\(\)]\s*[0-9\+\-\*\^\/\(\)\s]*.*$/) !== null) {
    return "calculator";
  } else if (
    str.match(/^.*(tambahkan|tambah)\s*pertanyaan\s*.+\s*dengan\s*jawaban\s*.+$/) !== null) {
    return "add";
  } else if (
    str.match(/^.*hapus\s*pertanyaan\s*.+$/) !== null) {
    return "delete";
  } else {
    return "ask";
  }
};

export default regex;
