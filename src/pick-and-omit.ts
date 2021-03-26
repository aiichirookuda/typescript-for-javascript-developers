export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
// DetailedProfileからnameとweightが採用される。

type SmallProfile = Omit<DetailedProfile, 'height'>;
// DetailedProfileからheightが除外される。

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>; //Omitの実態
type MyOmit<T> = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit<DetailedProfile>;
