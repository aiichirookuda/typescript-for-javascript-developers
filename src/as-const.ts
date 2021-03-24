export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;
// nickname = 'Hamtaro'; エラー
nickname = 'Ham';

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;
// as constを書くことで、全てのプロパティがreadonlyになる。

// profile.name = 'Ham'; エラー
// profile.height = 180; エラー
