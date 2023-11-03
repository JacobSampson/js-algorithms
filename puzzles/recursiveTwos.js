(() => {
  console.log(recursiveTwos(1));
  console.log(recursiveTwos(2));
  console.log(recursiveTwos(3));
  console.log(recursiveTwos(4));
  console.log(recursiveTwos(5));
  console.log(recursiveTwos(6));
  console.log(recursiveTwos(7));
})();

function recursiveTwos(num) {
  if (num <= 1) {
    return 1;
  }

  return (
    2 + recursiveTwos(Math.floor(num / 2)) + recursiveTwos(Math.ceil(num / 2))
  );
}
