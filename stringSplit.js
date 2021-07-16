const stringSplit = function (s) {
  let emptystr = '';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (emptystr.includes(s[i])) {
      count++;
      emptystr = '';
      emptystr = s[i];
    } else {
      emptystr = emptystr.concat(s[i]);
    }
  }
  if (emptystr) return count + 1;
};

// console.log(stringSplit('abacbac'));
