const fizzbuzz = function (n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
    }
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    }
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log('Fizz');
    }
    if (i % 3 !== 0 && i % 5 === 0) {
      console.log('Buzz');
    }
  }
};

// console.log(fizzbuzz(15));
