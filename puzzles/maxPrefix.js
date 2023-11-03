(() => {
  console.log(maxPrefix([6, 4, -2, 3, -5, 1])); // [ 11, 7 ]
  console.log(maxPrefix([]));
})();

function maxPrefix(arr) {
  if (arr.length == 1) {
    return [arr[0], arr[0]];
  }

  const values = maxPrefix(arr.splice(0, arr.length - 1));
  const newSum = values[1] + arr[arr.length - 1];

  return [Math.max(values[0], newSum), newSum];
}
