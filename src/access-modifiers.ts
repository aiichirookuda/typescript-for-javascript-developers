export {};

class Person {
  public name: string; //どこからでもアクセスできる。
  // private age: number; //クラス 'Person' 内でのみアクセスできる。
  protected age: number; // 小クラスからでもアクセスできる。
  protected nationality: string; // 小クラスからでもアクセスできる。

  //注意）constructorの戻り値には型は定義しない。リターンしないから。
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age); エラー
// let hanako = new Person();
