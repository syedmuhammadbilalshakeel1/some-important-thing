let matrix_A = [
  [2, 4, 4, 4],
  [3, 2, 2, 2],
  [1, 5, 9, 1],
  [5, 5, 5, 5],
];

let matrix_B = [
  [2, 4, 4, 4],
  [3, 2, 2, 2],
  [1, 5, 9, 1],
  [5, 5, 5, 5],
];

let matrix_C = [
  [0, 0, 0, ],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

for (let x = 0; x < 4; x++) {
  for (let y = 0; y < 4; y++) {
    for (let z = 0; z < 4; z++) {
      matrix_C[x][y] += matrix_A[x][z] * matrix_B[z][y];
    }
  }
}
document.write(`the answer show in the console`)
console.log(matrix_C);