function getRandomArbitrary(min, max) {
  if (min > max) {
    throw new Error(`You are stupid`);
  }
  const nomer = Math.random() * (max - min) + min;
  return Math.ceil(nomer);
}

const triangles = [];

for (let i = 0; i < 40; i++) {
  const side1 = getRandomArbitrary(1, 20);
  const side2 = getRandomArbitrary(1, 20);
  const side3 = getRandomArbitrary(1, 20);
  const triangle = [side1, side2, side3];
  triangles.push(triangle); //перенесли треугольник с готовыми сторонами в главный массив треугольников
}
function sumNumbers(accum, number) {
  //сумма сторон и сторона
  return accum + number;
}
for (const triangle of triangles) {
  // берем по одному треугольнику из массива с треугольниками
  const maxSide = Math.max(...triangle); //три точки помогают извлечь числа из массива и работать с ними
  const sum = triangle.reduce(sumNumbers, 0); //сумма всех сторон в сам
  const sum2 = sum - maxSide; //нашли сумма двух меньших сторон треугольника
  if (maxSide < sum2) {
    console.log(` Triangle is exist `, triangle);
  } else console.log(` Triangle is not exist `, triangle);
}
