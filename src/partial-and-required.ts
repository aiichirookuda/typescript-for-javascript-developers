export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// 全てがオプショナルなプロパティをもつ型が欲しい。
// 下記のように書くのは非効率で、メンテナンスも面倒。

// type PartialType = {
//   name?: string | undefined;
//   age?: number | undefined;
//   zipCode?: number | undefined;
// }

// Partialを使えば...
type PartialType = Partial<Profile>;
// Partialを使うことで、既存のプロパティからオプショナルなプロパティを作成できる。

// 逆に全てが必須のプロパティが欲しい時はも、下記のように書くのは面倒。

// type RequiredType = {
//   name: string;
//   age: number;
//   zipCode: number;
// }

// Requiredを使えば...
type RequiredType = Required<Profile>;
// Requiredを使うことで、既存のプロパティから全てが必須なプロパティを作成できる。
