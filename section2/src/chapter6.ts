// any
// 특정 변수의 타입을 우리가 확실히 모를때
// any - 모든, 누구나

let anyVar: any = 10;

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  num = unknownVar;
}
// 무슨값이 들어올지 모를때 any보다는 조금 더 안전한 unknown사용하기
