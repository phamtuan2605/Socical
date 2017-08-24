// Cac ham chung
export class Commons {

  // Ham ma hoa
  static Encrypt = (toEncrypt) => toEncrypt;

  // Ham giai ma
  static Decrypt = (toDecrypt) => toDecrypt;

  // Convert base 64 to string
  static ConvertBase64ToString = (strBase64) => {
    const b = new Buffer(strBase64, 'base64');
    const s = b.toString('utf8');
    return s;
  };

  // Hàm format tiền tệ
  static NumberFormat(number, decimals, decPoint, thousandsSep) {
    // *     example 1: number_format(1234.56);
    // *     returns 1: '1,235'
    // *     example 2: number_format(1234.56, 2, ',', ' ');
    // *     returns 2: '1 234,56'
    // *     example 3: number_format(1234.5678, 2, '.', '');
    // *     returns 3: '1234.57'
    // *     example 4: number_format(67, 2, ',', '.');
    // *     returns 4: '67,00'
    // *     example 5: number_format(1000);
    // *     returns 5: '1,000'
    // *     example 6: number_format(67.311, 2);
    // *     returns 6: '67.31'
    // *     example 7: number_format(1000.55, 1);
    // *     returns 7: '1,000.6'
    // *     example 8: number_format(67000, 5, ',', '.');
    // *     returns 8: '67.000,00000'
    // *     example 9: number_format(0.9, 0);
    // *     returns 9: '1'
    // *    example 10: number_format('1.20', 2);
    // *    returns 10: '1.20'
    // *    example 11: number_format('1.20', 4);
    // *    returns 11: '1.2000'
    // *    example 12: number_format('1.2000', 3);
    // *    returns 12: '1.200'
    const n = !isFinite(+number) ? 0 : +number;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
    const dec = (typeof decPoint === 'undefined') ? '.' : decPoint;

    function toFixedFix(ns, precs) {
      // Fix for IE parseFloat(0.55).toFixed(0) = 0;
      const k = Math.pow(10, precs);
      return Math.round(ns * k) / k;
    }

    const s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      const arrNew = prec - s[1].length;
      s[1] += new Array(arrNew + 1).join('0');
    }
    return s.join(dec);
  }

}