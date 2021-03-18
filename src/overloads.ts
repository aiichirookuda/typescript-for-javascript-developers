export {};

// シグネチャー
// 型を制約するのはシグネチャーの役割。
function double(value: number): number;
function double(value: string): string;

// オーバーロードした関数では全ての型を受け取れるようにする。
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go'));
// console.log(double(true)); エラー
