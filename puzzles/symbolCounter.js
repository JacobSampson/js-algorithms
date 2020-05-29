(function() {
    console.log(symbolCounter('h*\\^/c|`/ R@ikes $+ud3nts.') == 8);
    console.log(symbolCounter('$up3r $m@$h 8r*$ G@m3!!!”') == 7);
    console.log(symbolCounter('annaisaloser%@') == 2);
    console.log(symbolCounter('#1(annashouldbe)$ @ home') == 5);
    console.log(symbolCounter('\\/@L 15 C00|') == 3);
})()

function symbolCounter(str) {
    // If down to one
    if (str.length === 1) { 
        if (!isAt(str)) {
            return 0;
        }
    }
    if (isAt(str.charAt(str.length - 1))) {
        return [...str].reduce((acc, curr) => {
            if (isSymbolCharacter(curr)) {
                return acc + 1;
            }
            return acc;
        }, 0);
    } else {
        return symbolCounter(str.substring(0, str.length - 1))
    }
 }

function isAt(c) {
    return c === '@';
}

function isSymbolCharacter(c) {
    if (c.charCodeAt(0) <= 'Z'.charCodeAt(0) && c.charCodeAt(0) >= 'A'.charCodeAt(0)) {
        return false;
    }
    if (c.charCodeAt(0) <= 'z'.charCodeAt(0) && c.charCodeAt(0) >= 'a'.charCodeAt(0)) {
        return false;
    }
    if (Number.isInteger(+c) || c === ' ') {
        return false;
    }
    return true;
}
