function hypotenuse(a, b) {
  // a и b - катеты прямоугольного треугольника
  const c = Math.pow(a, 2) + Math.pow(b, 2); //находим квадрат гипотенузы
  return Math.sqrt(c); // возвращаем гипотенузу
}

const cathetA = 3;
const cathetB = 4;

const hyp = hypotenuse(cathetA, cathetB);

console.log(`ty pidar #${hyp} `);

