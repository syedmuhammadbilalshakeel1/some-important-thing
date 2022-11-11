//----------------- Q1
document.write(`That is the question No1 <br><br>`)
let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let primaryDiagnol = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (i === j) {
      //    console.log(primaryDiagnol = primaryDiagnol+ array[i][j]);
      primaryDiagnol = primaryDiagnol + array[i][j];
    }
  }
}
document.write(`primary diagnol ${primaryDiagnol} <br>`);

let q = 3;
let secondoryDaignol = 0;
for (let x = 0; x < array.length; x++) {
  for (let y = 0; y < array.length; y++) {
    if (x + y === q - 1) {
    //   console.log(secondoryDaignol = secondoryDaignol + array[x][y]);
      secondoryDaignol = secondoryDaignol + array[x][y]
    }
  }
}
document.write(`secondary daignol ${secondoryDaignol}`)


