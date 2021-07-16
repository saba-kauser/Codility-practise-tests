const permMiss = function (A) {
  // write your code in JavaScript (Node.js 4.0.0)
  let size = A.length;
  let sum = ((size + 1) * (size + 2)) / 2;
  for (let i = 0; i < size; i++) {
    sum -= A[i];
  }
  return sum;
};

// console.log(permMiss([2, 3, 1, 5]));
