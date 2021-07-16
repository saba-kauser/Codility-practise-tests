const FrogRiverOne = function (X, A) {
  const counts = new Map();
  for (let i = 0; i < A.length; i++) {
    let positon = A[i];
    if (!counts.has(positon)) {
      counts.set(positon, true);
    }
    if (counts.size === X) {
      return i;
    }
  }
  return -1;
};

// console.log(FrogRiverOne(2, [2, 2, 2, 2, 2]));
