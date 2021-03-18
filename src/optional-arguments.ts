export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.71, 67, true); //=> { bmi: 22.91303307000445 }

// bmi(身長, 体重, console.logで出力するかどうか)
// bmi(1.78, 86, true); 出力される
// bmi(1.78, 67, false); 出力されない
// bmi(1.78, 67); 出力されない
