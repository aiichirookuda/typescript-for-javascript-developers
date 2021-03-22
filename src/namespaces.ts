export {};

// namespaceを使うことで同じ名前のクラスを作成することができる。

namespace Japanese {
  // exportしないと外から呼び出すことができない。
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
