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

function sinX(x, c) {
  // x противолежащий катет, c - гипотенуза
  const sinx = x / c;
  return sinx;
}
function cosX(x, c) {
  // x прилежащий катет, c - гипотенуза
  const cosx = x / c;
  return cosx;
}
function tgX(a, b) {
  // a - противолежащий катет , b - прилежащий катет
  const tgx = a / b;
  return tgx;
}
console.log(`\n
    Дан прямоугольный треугольник:   B.
    AC и BC - катеты                 /|
    AB - гипотенуза                 / |
    <ACB = прямой                  /  |
                                  /   |
                                 /    |
                                /_____|
                              A        C  
    `);

rl.question('Введите сторону AC=', function (cathetAC) {
  rl.question('Введите сторону BC=', function (cathetBC) {
    const hypAC = hypotenuse(cathetAC, cathetBC); //Нахождение гипотенузы по теореме Пифагора
    console.log(`Стороны треугольника : 
AC = ${cathetAC}
BC = ${cathetBC}
AB = ${hypAC}`);

    console.log(`\n
   | MENU     | ENTER | AXPLANATION |
   | Find sin | sinX  | X - angle   |
   | Find cos | cosX  | (enter A ,  |
   | Find tg  | tgX   |  B or C)    |
    `);// вывод меню для выбора дальнейших действий

    function doOperation() {
      rl.question(`Enter operation of MENU => `, function (doit) {// считывание операции
        if (doit == `sinA`) {
          doit = sinX(cathetBC, hypAC);
        } else if (doit == `sinB`) {
          doit = sinX(cathetAC, hypAC);
        } else if (doit == `sinC`) {
          doit = 1;
        } else if (doit == `cosA`) {
          doit = cosX(cathetAC, hypAC);
        } else if (doit == `cosB`) {
          doit = cosX(cathetBC, hypAC);
        } else if (doit == `cosC`) {
          doit = 0;
        } else if (doit == `tgA`) {
          doit = tgX(cathetBC, cathetAC);
        } else if (doit == `tgB`) {
          doit = tgX(cathetAC, cathetBC);
        } else if (doit == `tgC`) {
          doit = undefined;
        } else {// сообщение об ошибке, возможность ввести заново
          console.log('Incorrect params');
          return doOperation();// функция возвращает нас к началу цикла, если операция не найдена
        }

        console.log(`\n `, doit);// вывод запрошенного результата

        process.exit(1);//закрытие дальнейшего ввода, завершение проги
      });
    }//функция закрыта

    doOperation();//вызов операций
  });
});
