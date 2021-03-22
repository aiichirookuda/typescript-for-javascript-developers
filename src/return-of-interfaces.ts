export {};

class Mahotsukai {}
class Souryo {}

// クラスは継承できるのは１つだけ。
class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

// インターフェースなら２つ以上実装できる。
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('イオナズン');
  }

  kougeki(): void {
    console.log('攻撃');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
