(function() {
    console.log(magicDuos());
})();

function magicDuos() {
    let num = 0;

    for (let j = 1; j < 1000; j++) {
        for (let i = j; i < (1000 / j); i++) {
            if (isIncreasing(i * j)) {
                num++;
            }
        }
    }

    return num;
}

function isIncreasing(num) {
    let stringNum = `${num}`;
    for (let i = 0; i < stringNum.length - 1; ++i) {
        if (stringNum[i + 1] < stringNum[i]) {
            return false;
        }
    }

    return true;
}
