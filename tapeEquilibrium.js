const tapeEquil = function (A) {
  let sum = A[0];
  let revSum = 0;
  for (let right = 1; right < A.length; right++) {
    revSum += A[right];
  }
  console.log(revSum);
  let min = Math.abs(sum - revSum);
  console.log(min);
  for (let left = 1; left < A.length - 1; left++) {
    sum += A[left];
    revSum -= A[left];
    if (min > Math.abs(sum - revSum)) min = Math.abs(sum - revSum);
  }
  return min;
};
