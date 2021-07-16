const countDiv = function (A, B, K) {
  let count = 0;
  if (A <= B)
    for (let i = A; i <= B; i++) {
      if (i % K === 0) {
        count++;
      }
    }
  return count;

  //   below gives 100
  //   return Math.floor(B / K) - Math.ceil(A / K) + 1;
};

// console.log(countDiv(4, 28, 4));
