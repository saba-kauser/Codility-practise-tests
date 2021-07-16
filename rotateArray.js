const A = [1, 2, 3, 4, 5];
function solution(A, K) {
  if (A.length === 0 || K === 0 || K % A.length === 0) return A;
  for (let i = 0; i < K; i++) {
    let a = A.pop();
    A.unshift(a);
  }
  return A;
}

// console.log(rotateArr([3, 4, 6], 1));
