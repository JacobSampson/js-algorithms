(function () {
  let matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  printMatrix(matrix);
  matrix = rotateMatrixInPlace(matrix);
  console.log("NEXT\n");
  printMatrix(matrix);
})();

function rotateMatrixInPlace(matrix) {
  let tempCell;

  // Horizontal flip
  for (let j = 0; j < matrix.length; ++j) {
    for (let i = 0; i < matrix[0].length / 2; ++i) {
      tempCell = matrix[j][i];
      matrix[j][i] = matrix[j][matrix[0].length - 1 - i];
      matrix[j][matrix[0].length - 1 - i] = tempCell;
    }
  }

  // Vertical flip
  for (let j = 0; j < matrix.length / 2; ++j) {
    for (let i = 0; i < matrix[0].length; ++i) {
      tempCell = matrix[j][i];
      matrix[j][i] = matrix[matrix.length - 1 - j][i];
      matrix[matrix.length - 1 - j][i] = tempCell;
    }
  }

  return matrix;
}

function printMatrix(matrix) {
  for (let row of matrix) {
    console.log(row);
  }
}
