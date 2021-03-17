export {};

// 列挙型...要素に自動的に番号が振られる。
// 頭の要素に数字を振ると、振った数字からスタートする。
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  December,
}

console.log(Months.January); //=> 1
console.log(Months.February); //=> 2
console.log(Months.December); //=> 12

// ↓こう書くのは面倒
// const MonthsJs = {
//   January: 0,
//   February: 1,
// };

// console.log(MonthsJs.January); //=> 0
// console.log(MonthsJs.February); //=> 1

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });

// 付け足し可能。
enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#080808',
}

COLORS.YELLOW;
