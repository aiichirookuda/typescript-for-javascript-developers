export {};

class Person {
  name: string;
  age: number;

  //注意）constructorの戻り値には型は定義しない。リターンしないから。
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
// let hanako = new Person();
