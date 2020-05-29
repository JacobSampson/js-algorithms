(() => {
    console.log(largestIncrease([5, 0, 2, 3, 1, 4])); // 3
    console.log(largestIncrease([9, 6, 3, 1]))
    // console.log(largestIncrease([]));
})();

function largestIncrease(arr) {
    if (arr.length === 1) {
        return -Number.MAX_VALUE;
    }

    return Math.max(arr[1] - arr[0], largestIncrease(arr.splice(1)));
}