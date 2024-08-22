const media = (...arr) => {
  const soma = arr.reduce((acumulador, num) => acumulador + num, 0);
  return soma / arr.length;
};

const mediaPonderada = (...entradas) => {
  const sum = entradas.reduce((accum, { num, peso }) => accum + num * peso, 0);
  const sumPeso = entradas.reduce((accum, entry) => accum + entry.peso, 0);
  return sum / sumPeso;
};

const mediana = (...nums) => {
  const ordenados = [...nums].sort((a, b) => a - b);
  const meio = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 !== 0) {
    return ordenados[meio];
  }
  const meio1 = ordenados[meio - 1];
  const meio2 = ordenados[meio];
  return media(meio1, meio2);
};

const moda = (...nums) => {
  const quantidade = nums.map((num) => [
    num,
    nums.filter((n) => num === n).length,
  ]);

  quantidade.sort((a, b) => b[1] - a[1]);
  return quantidade[0][0];
};

console.log(`Media aritmetica simples: ${media(5, 10, 15, 20)}`);

console.log(
  `Media Ponderada: ${mediaPonderada(
    { num: 9, peso: 3 },
    { num: 5, peso: 2 },
    { num: 20, peso: 8 },
    { num: 12, peso: 4 }
  )}`
);

console.log(`Mediana: ${mediana(34, 12, 34, 22, 1, 4, 5)}`);

console.log(`Moda: ${moda(1, 1, 1, 2, 2, 3, 4, 4, 4, 54, 5, 4, 12, 31, 2)}`);
