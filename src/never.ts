export {};

// 呼び元に返ってこない場合はnever型を指定する。
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

// void型とnever型の違いは...
// void型...returnされる値が無い。しかし、呼び元には必ず返ってくる。
// never型...呼び元に返ってこない。

let foo: void = undefined;
let bar: never = error('only me!'); // errorはnever型に代入することができる。
