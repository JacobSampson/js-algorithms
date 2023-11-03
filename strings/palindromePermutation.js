(function () {
  console.log(true == palindromePermutation("agfig  gg fia"));
  console.log(false == palindromePermutation("agfig  gyg fia"));
})();

function palindromePermutation(string) {
  let freqChars = {};

  for (let char of string) {
    if (freqChars[char] != undefined) {
      freqChars[char] = freqChars[char] + 1;
    } else {
      freqChars[char] = 1;
    }
  }

  let numOdd = 0;

  for (let entry in freqChars) {
    if (freqChars[entry] % 2 == 1) {
      numOdd++;
      if (numOdd > 1) {
        return false;
      }
    }
  }

  return true;
}
