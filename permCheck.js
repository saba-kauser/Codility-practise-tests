const PermCheck = function (A) {
  const [...s] = new Set(A.sort((a, b) => a - b));
  // console.log(s);
  let n = 1;
  for (let i = 0; i < s.length - 1; i++) {
    const b = s[i] !== s[i + 1] - 1;
    if (b) {
      n = 0;
      break;
    }
  }
  return n;

  // below gives 100
  //   const length = A.length;

  //   var result = A.reduce((acc, value) => {
  //     acc[value] = true;
  //     return acc;
  //   }, {});

  //   for (var i = 1; i <= length; i++) {
  //     if (!result[i]) {
  //       return 0;
  //     }
  //   }

  //   return 1;
};

// console.log(PermCheck([1, 4, 2, 3]));
