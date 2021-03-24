export {};

// 型アサーション＝このデータの型はこうだよと示してあげること
// 想定外のデータの混入を防ぐことができる。

let name: any = 'Ham';

let length = (name as string).length; //推奨
// let length = (<string>name).length; //非推奨...JSXの記法と似ているから。

// length = 'foo'; エラー
