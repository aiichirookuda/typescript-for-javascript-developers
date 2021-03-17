export {};

//return文の無い関数にはvoid型が指定できる。
function returnNothing(): void {
  console.log("I don't return anything!");
}

console.log(returnNothing());
