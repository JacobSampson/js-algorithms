(() => {
  console.log(maxMultiplyPrefix([6, 4, -2, 3, -5, 1])); // [ 11, 7 ]
})();

function maxMultiplyPrefix(arr) {
  if (arr.length <= 1) {
    return [arr[0] || 0, arr[0] || 0];
  }

  const lowValues = maxMultiplyPrefix(arr.slice(0, Math.floor(arr.length / 2)));
  const highValues = maxMultiplyPrefix(
    arr.slice(Math.floor(arr.length / 2), arr.length),
  );

  const newSum = lowValues[1] + highValues[1];
  const newHigh = Math.max(lowValues[0], lowValues[1] + highValues[0]);

  return [newHigh, newSum];
}
