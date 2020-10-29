const readline = require('readline');
const rl = readline.createInterface({
  //создание экземпляра путем настройки читаемых и записываемых потоков
  input: process.stdin, //этот ключ принимает считываемый потом
  output: process.stdout, //ключ принимает перезаписываемый потом
});

function hypotenuse(a, b) {
  // a и b - катеты прямоугольного треугольника
  const c = Math.pow(a, 2) + Math.pow(b, 2); //находим квадрат гипотенузы

  return Math.sqrt(c); // возвращаем гипотенузу
}
function cathet(c, b) {
  // c и b - гипотенуза и один из катетов
  const a = Math.pow(c, 2) - Math.pow(b, 2); //находим квадрат неизвестного катета

  return Math.sqrt(a); // возвращаем второй катет
}
rl.question('Введите первый катет прямоугольного треугольника', function (side1) {
  rl.question('Введите второй катет прямоугольного треугольника', function (side2) {
    const side3 = hypotenuse(side1, side2); //Нахождение гапотенузы по теореме Пифагора

    console.log(`Гипотенуза в прямоугольном треугольнике с катетами ${side1} и ${side2} равна ${side3}`);

    rl.question('Введите первый катет прямоугольного треугольника', function (cathet1) {
      rl.question('Введите гипотенузу прямоугольного треугольника', function (hyp) {
        const cathet2 = cathet(hyp, cathet1); //Нахождение катета по теореме Пифагора

        console.log(`Прямоугольнный треугольник: \n катеты = ${cathet1} и ${cathet2} \n гипотенуза = ${hyp}`);
        rl.close();
      });
    });
  });
});
