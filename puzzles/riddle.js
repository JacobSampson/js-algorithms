(() => {
  console.log(riddle([0, 4, -8, -222, -2, 78, 3]));
})();

function riddle(arr) {
  if (arr.length == 1) {
    return arr[0];
  }

  const curr = riddle(arr.splice(0, arr.length - 1));

  return Math.min(curr, arr[arr.length - 1]);
}
