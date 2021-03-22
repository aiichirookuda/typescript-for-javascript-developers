export {};

// class Person {
//   public name:string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// 下記のように省略して書くことができる。
class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('はむさん', 43);
console.log(me);
