function _get_nomor_surat({ params }) {
  const { nomorUrut, kodeSurat } = params;
  // mendapatkan tanggal hari ini
  const today = new Date();
  const date = today.getDate();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const romanNum = convertToRoman(month); // mengonversi bulan ke angka romawi
  // const currentDate = month.toString().padStart(2, '0') + '/' + romanNum + '/' + year.toString().substr(-2);
  const currentDate = date.toString().padStart(2, '0') + '/' + romanNum ;

  // let lastNoSurat = 1000;
  // if (nomorUrut.length > 0) {
  //   lastNoSurat = parseInt(nomorUrut[0].no_surat.split('/')[0]);
  // }
  // let currentNoSurat = (nomorUrut + 1).toString().padStart(2, '0');
  let nomorSurat = parseInt(nomorUrut);
  let currentNoSurat = (nomorSurat + 1).toString();
  const newNoSurat = currentNoSurat + '/' + currentDate + '/UNSADA/' + kodeSurat + '/' + year;
  return newNoSurat;
}

// fungsi untuk mengonversi angka menjadi angka romawi
function convertToRoman(num) {
  const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNum = '';
  for (let i = 0; i < decimalValues.length; i++) {
    while (num >= decimalValues[i]) {
      romanNum += romanNumerals[i];
      num -= decimalValues[i];
    }
  }
  return romanNum;
}

export default _get_nomor_surat;