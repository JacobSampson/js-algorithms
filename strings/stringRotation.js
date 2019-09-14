(function() {
    let testStr1 = 'waterbottle';
    let testStr2 = 'aterbottlew';

    console.log(isRotation(testStr1, testStr2));
    console.log(isRotationSubstring(testStr1, testStr2));
})();

function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let indexOfSplit = str2.indexOf(str1.slice(str1.length / 2));
    let reverseString = shiftNChars(str2, indexOfSplit + (str1.length / 2 + str1.length % 2));
    
    return reverseString === str1;
}

function shiftNChars(string, num) {
    let newString = '';

    let charIndex;
    for (let i = 0; i < string.length; ++i) {
        charIndex = (num + i) % string.length;

        newString = newString + string.charAt(charIndex);
    }

    return newString;
}

function isRotationSubstring(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    return isSubstring(str1 + str1, str2);
}

function isSubstring(str1, str2) {
    let longStr;
    let shortStr;

    if (str1.length > str2.length) {
        longStr = str1;
        shortStr = str2;
    } else {
        longStr = str2;
        shortStr = str1;
    }

    let charInRow = 0;
    let currCharIndex = 0;

    for (let i = 0; i < longStr.length; i++) {
        if (longStr.charAt(i) === shortStr.charAt(currCharIndex)) {
            charInRow++;
            currCharIndex++;

            if (charInRow == shortStr.length) {
                return true;
            }
        } else {
            charInRow = 0;
            currCharIndex = 0;
        }
    }

    return false;
}