// 2-4. 繰り返し表示する際、数字が3の倍数だったら"Fizz" 。5の倍数だったら"Buzz"。15の倍数だったら"FizzBuzz" を表示するようにFizzBuzz を変えてください。
const FizzBuzz = function (number) {
  for (let i = 0; i <= number; i++) {
    if (i === 0) {
      console.log(i);
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
FizzBuzz(100);
