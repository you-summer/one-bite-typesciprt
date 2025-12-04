// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "조연정",
  nickname: "dami",
  birth: "1993.11.01",
  bio: "안냐세요",
  location: "서울시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "hong",
  birth: "1994.04.12",
  bio: "ㅎㅇㅎㅇ",
  location: "한국",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
  // 한국이라는 프로퍼티가 꼭 있어야한다면! 이렇게
};

let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 410,
};
