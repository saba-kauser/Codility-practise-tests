const maxCounter = function (N, A) {
  const count = Array(N).fill(0);
  let max = 0,
    pos = 0,
    i = 0;
  for (i = 0; i < A.length; i++) {
    if (A[i] < N + 1) {
      pos = A[i] - 1;
      count[pos]++;
    } else {
      count.fill(Math.max(...count));
    }
  }
  return count;
};

// console.log(maxCounter(5, [3, 4, 4, 6, 1, 4, 4]));
