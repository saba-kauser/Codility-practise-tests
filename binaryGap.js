const binaryGap = function (N) {
  const bin = N.toString(2);
  let finalMax = 0,
    currentMax = 0;

  for (var i = 0; i < bin.length; i++) {
    if (bin[i] == '0') currentMax++;
    if (bin[i] == '1' && i != 0) {
      finalMax = Math.max(finalMax, currentMax);
      currentMax = 0;
    }
  }
  return parseInt(finalMax);
};

console.log(`The maximum Binary gap is : ${binaryGap(483)}`);
