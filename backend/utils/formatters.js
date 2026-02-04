function formatData(stringDate){
  let dia = stringDate.substring(0,3);
  let mes = stringDate.substring(3,6);
  let ano = stringDate.substring(6,10);
  let dateOK = mes + dia + ano;
  if (parseInt(dia) > 31 || parseInt(mes) > 12 || parseInt(ano) < 1900 || parseInt(ano) > 2100){
    return null;
  }
  return dateOK;
}

function formatString(string) {
  return string
    .trim()
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

module.exports = {
  formatData,
  formatString
};
