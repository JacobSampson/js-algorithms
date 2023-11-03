(() => {
  // console.log(isUnique("abcdEFgAa"));
  console.log(isUnique("fsdjlk"));
})();

function isUnique(string) {
  let chars = [];

  for (let char of string) {
    if (chars.indexOf(char) !== -1) {
      return false;
    }
    chars.push(char);
  }

  return true;
}
