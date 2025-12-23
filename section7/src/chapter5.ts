/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("~~때문에 실패!");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  console.log(err);
});
