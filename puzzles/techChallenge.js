(function(){
    // let array = [-5, -19, 0, -20, -11, 12, 27, -16, -2, -2, 23, 0, -3, 4, 7, -1, -28, 18, 21, 17, -23, 9, 2, -19, 8];
    // console.log(longestSubarray(array))
    // console.log(divisible())

    // let array = [3, 2, 4, 6, 3, 4, 5, 8, 6, 7, 9, 6, 3, 6, 8, 4, 2, 2, 4, 6, 2, 1, 3, 4, 5, 6, 7, 4, 5, 7, 4, 5, 3, 2, 5, 6, 3, 7, 8, 3, 2, 9, 0, 4, 3, 6, 8, 9];

    // console.log(oddNumber(array));
    // let string = 'GHIJKLMNOPQRSTUVWXYZABCDEF';

})();

function oddNumber(array) {
    let sum = 0;

    let numArray = {};


    for (let curr of array) {
        if (numArray[curr] === undefined) {
            numArray[curr] = 1;
        } else {
            numArray[curr]++;
        }
    }

    for (let curr in numArray) {
        if (numArray[curr] % 2 ==1) {
            sum++;
        }

    }

    return sum;
}

function divisible() {

    let sum = 0;
    for (let i = 2; i < 5000; ++i) {
        if ((i % 3 == 0) || (i % 7 ==0) || (i % 11==0)) {
            sum++;
        }
    }
    return sum;
}


function longestSubarray(array) {
    let index = 0;
    let maxValue = -5;

    for (let i = 2; i < array.length - 5; ++i) {
        let currMax = sum(array.slice(i,i + 5));

        if (currMax > maxValue) {
            index = i;
        }
    }
    return index;
}

function sum(array) {
    let sum = 0;
    for (let curr of array) {
        sum += curr;
    }
    return sum;
}