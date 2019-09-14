(function() {
    console.log(compressString("ddddjkkljhhhhsslkkkkkk"));
})();

function compressString(string) {
    let compressString = '';

    let currChar = 0;
    let currCount = 0;
    for (let char of string) {
        if (char === currChar) {
            currCount++;
        } else {
            // Account for first entry
            if (currCount > 0) {
                compressString = compressString + currChar + currCount;
            }
            currChar = char;
            currCount = 1;
        }
    }

    return compressString.length < string.length ? compressString : string;
}