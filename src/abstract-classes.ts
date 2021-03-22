export {};

// 抽象メソッドはかならずオーバーライドする必要がある。
// オーバーライド無しだと、継承先の小クラスでエラーが発生するため、実装忘れの防止に役立つ。

// 抽象クラス...抽象メソッドを有したクラス。
// 抽象メソッドは、抽象クラス内でのみ使用できる。
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}
