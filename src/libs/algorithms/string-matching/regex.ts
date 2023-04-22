const regex = (str: string): string => {
  str = str.toLowerCase();

  if (
    str.match(/^.*(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([1-2][0-9]{3}).*$/) !== null) {
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
