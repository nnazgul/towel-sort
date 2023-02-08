
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  let result = [];
  if (matrix.length !== 0) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let columnInx = i % 2 === 0
          ? j
          : (matrix[i].length - j - 1);
        result.push(matrix[i][columnInx]);
      }

    }

    return result;
  } else {
    return result;
  }


}