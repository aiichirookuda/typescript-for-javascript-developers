export {};

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.71, 67)); //=> 22.91303307000445
