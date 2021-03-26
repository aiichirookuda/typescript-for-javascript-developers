export {};

// ConstructorParameters... クラスのインスタンスを作る際の、引数の型を抽出することができる。

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Ham', 43];
const ham = new Person(...profile);
console.log(ham);

// ConstructorParametersの実態
type MyConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;
