export {};

//UnionTypesでは要素の順番までは制約できないのでs、Tuple型を使う。
let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham']; エラー
