export {};

// Exclude... 除外する。
type MyExclude<T, U> = T extends U ? never : T; //Excludeの実態
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>; //stringとnumberが除外されて、DebugTypeが設定される。
type NunFunctionType = Exclude<SomeTypes, DebugType>; //DebugTypeが除外されて、stringとnumberが設定される。
type TypeExcludingFunction = Exclude<SomeTypes, Function>; //関数の型が除外される。

// Extract... 抽出する。
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>; //全ての型からDebugTypeが抽出され、設定される。
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>; //全ての型からstring、numberが抽出され、設定される。
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// NonNullable... 無効不可。
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>; //null、undefinedが排除され、string、numberが設定される。
