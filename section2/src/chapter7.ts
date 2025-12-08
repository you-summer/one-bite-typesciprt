// void
// void -> 공허 -> 아무것도 없다
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "Hello";
}

function func2(): void {
  console.log("Hello");
}

//undefined나 null을 쓰면되지 왜 void?
// 진짜로 undefined를 사용하면 오류가 발생함
// 진짜 undefined를 사용하게되면 return undefined해줘야함

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let a: never;
