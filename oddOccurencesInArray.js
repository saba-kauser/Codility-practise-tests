const oddOccurrence = function (A) {
  let map = {};
  for (var i = 0; i < A.length; i++) {
    map[A[i]] = ++map[A[i]] || 1;
  }
  for (var vals in map) {
    if (map[vals] % 2 != 0) return parseInt(vals);
  }
};
// console.log(oddOccurrence([9, 3, 9, 3, 9, 7, 9]));
