/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "조연정",
  age: 33,
  sayHi: function () {
    console.log("hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
