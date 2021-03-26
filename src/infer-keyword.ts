export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// ReturnTypeの実態
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R //infer... 推論する
  ? R
  : any;
