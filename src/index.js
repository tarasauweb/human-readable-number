module.exports = function toReadable(number) {
  const arr = String(number).split('');
  let hundredths = ``;
  let tenths = ``;
  let res = '';
  let hundred = ``;
  const obj = {
    toTen: {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
    },
    toTwenty: {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
    },
    toHundred: {
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety',
    },
  };
  if (arr.length === 3) {
    hundred = `${obj.toTen[arr[0]]} hundred`;
    if (parseInt(arr[1], 10) > 1) {
      hundredths = `${obj.toHundred[arr[1]]}`;
      if (parseFloat(arr[2], 10) === 0) {
        res = `${hundred} ${hundredths}`;
      } else {
        tenths = `${obj.toTen[arr[2]]}`;
        res = `${hundred} ${hundredths} ${tenths}`;
      }
    } else if (parseInt(arr[1], 10) === 1) {
      const num = String(arr[1]) + String(arr[2]);
      hundredths = `${obj.toTwenty[num]}`;
      res = `${hundred} ${hundredths}`;
    } else if (parseInt(arr[1], 10) === 0 && parseInt(arr[2], 10) >= 1) {
      tenths = `${obj.toTen[arr[2]]}`;
      res = `${hundred} ${tenths}`;
    } else {
      res = hundred;
    }
    return res;
  }
  if (arr.length === 2) {
    if (parseInt(arr[0], 10) > 1) {
      hundredths = `${obj.toHundred[arr[0]]}`;
      if (parseInt(arr[1], 10) >= 1) {
        tenths = `${obj.toTen[arr[1]]}`;
        res = `${hundredths} ${tenths}`;
      } else {
        res = hundredths;
      }
    } else {
      const num = String(arr[0]) + String(arr[1]);
      res = `${obj.toTwenty[num]}`;
    }
  }
  if (arr.length === 1) {
    if (parseInt(arr[0], 10) === 0) {
      res = 'zero';
    } else {
      res = `${obj.toTen[arr[0]]}`;
    }
  }
  return res;
};
