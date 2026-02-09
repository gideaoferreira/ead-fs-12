const matriz = [
  // 0,1,2,3
  /* 0 */ [2, 4, 4, 5],
  /* 1 */ [3, 9, 5, 5],
  /* 2 */ [3, 4, 7, 5],
  /* 3 */ [3, 5, 7, 5],
];

for (let i = matriz[0][0]; i <= matriz[3][3]; i++) {
  for (let j = matriz[0][0]; j <= matriz[3][3]; j++)
    console.log(matriz[i][j])
}
