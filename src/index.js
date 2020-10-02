
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) return [];
    let result = [];
    for( let i = 0; i < matrix.length; i++) {
        if(i % 2 == 1) {
            for( let j = matrix[i].length - 1; j >= 0; j--) {
                console.log(j + ' UP');
                result.push(matrix[i][j]);
            }
        } else {
            for( let j = 0; j < matrix[i].length; j++) {
                result.push(matrix[i][j]);
            }
        }
    }
    return result;
}
