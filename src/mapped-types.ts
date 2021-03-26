export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
// Partialの実態... type Partial<T> = { [P in keyof T]?: T[P] };
type PropertyTypes = keyof Profile;

// 既存のオブジェクトの型を流用して、独自にカスタマイズした新しい型を作成できる。
type Optional<T> = { [P in keyof T]?: T[P] | null };
type OptionalProfile = Optional<Profile>;
