(function() {
    let array = [ 0, 82, 2, 23, 82, 8, 18, 18, 23, 82 ];

    console.log(array);
    console.log("Bubble Sort");
    console.log(bubbleSort(array.slice(0)));
    console.log("Selection Sort");
    console.log(insertionSort(array.slice(0)));
})();

function bubbleSort(array) {
    let hasFlipped = true;
    let unsortedLength = array.length - 1;
    while(hasFlipped) {
        let tempCell;
        hasFlipped = false;
        for (let i = 0; i < unsortedLength - 1; ++i) {
            if (array[i] > array[i + 1]) {
                tempCell = array[i + 1];
                array[i + 1] = array[i];
                array[i] = tempCell;
                hasFlipped = true;
            }
        }
        unsortedLength--;
    }

    return array;
}

function insertionSort(array) {


    return array;
}