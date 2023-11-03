(function () {
  console.log(oneAway("pale", "ple"));
  console.log(oneAway("pales", "pale"));
  console.log(oneAway("pale", "bale"));
  console.log(oneAway("pale", "bake"));
})();

function oneAway(string1, string2) {
  let editsNeeded = 0;

  let longString;
  let shortString;

  // Check through long string as it may have a removed char the short string will not
  if (string1.length > string2.length) {
    longString = string1;
    shortString = string2;
  } else {
    longString = string2;
    shortString = string1;
  }

  for (let i = 0; i < longString.length; ++i) {
    // Check if different chars at same index
    if (longString.charAt(i) !== shortString.charAt(i)) {
      if (longString.length != shortString.length) {
        longString = removeCharAtIndex(longString, i);
        i--;
      }
      editsNeeded++;
    }

    if (editsNeeded > 1) {
      return false;
    }
  }

  return true;
}

function removeCharAtIndex(string, index) {
  return string.slice(0, index) + string.slice(index + 1);
}
