export {};

// 下の２つの関数を１つに共通化したい。
// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// 下記のように書く。
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100)); //関数を実行するときに型を指定する。
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, generics!').echo());
console.log(new Mirror<boolean>(true).echo());
