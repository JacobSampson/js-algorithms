(function() {
    console.log(isPermutation("as", "sdfsdf"));
})();

function isPermutation(string, permutationString) {
    let numMatches = 0;
    for (let char of string) {
        let charIndex = -1;
        if ((charIndex = permutationString.indexOf(char)) != -1) {
            permutationString = permutationString.slice(0, charIndex) + permutationString.slice(charIndex + 1);
            numMatches++;

            if (numMatches == string.length) {
                return true;
            }
        }
    }

    return false;
}