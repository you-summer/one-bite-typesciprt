/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// 프로퍼티를 기준으로 타입을 정의하는 구조적 타입시스템을 따름

animal = dog;
// dog = animal;

type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programingBook: ProgramingBook = {
  name: "책먹는여우",
  price: 33000,
  skill: "react",
};

book = programingBook;
// programingBook = book;

/**
 * 초과 프로퍼티 검사
 */

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "책먹는여우",
  price: 33000,
  //   skill: "react",
};

let book3: Book = programingBook;
console.log(book3);

function func(book: Book) {
  console.log(book);
}
func({
  name: "책먹는여우",
  price: 33000,
  // skill: "react",
});
func(programingBook);
