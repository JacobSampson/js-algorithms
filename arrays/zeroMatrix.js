(function() {
    let matrix = [[
        2, 1, 2
    ],
    [
        3, 4, 0
    ],
    [
        6, 7, 8
    ]];

    printMatrix(matrix);
    console.log('NEXT\n');

    matrix = zeroMatrix(matrix);

    printMatrix(matrix);

})();

function zeroMatrix(matrix) {
    let zeroedRows = new Set();
    let zeroedCols = new Set();

    for (let j = 0; j < matrix.length; ++j) {
        for (let i = 0; i < matrix[0].length; ++i) {
            if (!matrix[j][i]) {
                zeroedCols.add(i);
                zeroedRows.add(j)
            }
        }
    }
    
    let shouldZero = 0;
    for (let j = 0; j < matrix.length; ++j) {
        for (let i = 0; i < matrix[0].length; ++i) {
            shouldZero = zeroedRows.has(j) || zeroedCols.has(i);

            if (shouldZero) {
                matrix[j][i] = 0;
            }
        }
    }

    return matrix;
}

function printMatrix(matrix) {
    for (let row of matrix) {
        console.log(row);
    }
}