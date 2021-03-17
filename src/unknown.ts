export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();
// 型がnumberなのかstringなのかよくわからないときに、anyに依存せず、
// 暫定的にunknown型を定義し、後々にtypeofを使って絞っていくと安全にコードが書ける。

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

// typeofを使ってある特定の型であることを確認しながらコードを安全に実行させる仕組みのことをタイプ（型）ガードと呼ぶ。
