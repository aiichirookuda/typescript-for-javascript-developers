export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;
// type PersonalDataType = {
//   readonly name: string;
//   readonly age: number;
// }

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
};

// friend.age++; エラー

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
