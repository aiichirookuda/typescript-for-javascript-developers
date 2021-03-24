export {};

// 中身が不確定な型を定義する際に使う。
// package.jsonの"strictNullChecks"をfalseにして、nullを使用可能な状態にする。
// nullを許容できる(able)状態 => nullable

// 積極的に使ってしまう、データがどんな値を持っているのか非常にわかりにくい状況になってしまう。

// どうしてもageの型が不確定の時はUnion型を使う。

let profile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null,
};
