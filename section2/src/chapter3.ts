// object
let user: {
  id?: number; // ? 있어도되고 없어도됨
  name: string;
} = {
  id: 1,
  name: "조연정",
};

// let dog: {
//   name: string;
//   color: string;
// } = {
//   name: "돌돌이",
//   color: "brown",
// };

let config: {
  readonly apiKey: string;
  // 수정할수없고 읽기전용!
} = {
  apiKey: "Mykey",
};
