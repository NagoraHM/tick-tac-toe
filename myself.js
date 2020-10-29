// Задача 1: прочитать строку посимвольно , выдать число символов

const readline = require('readline');
const rl = readline.createInterface({
  //создание экземпляра путем настройки читаемых и записываемых потоков
  input: process.stdin, //этот ключ принимает считываемый потом
  output: process.stdout, //ключ принимает перезаписываемый потом
}); // ключ для ввода данных

rl.question('Введите первую строку ', function (myStr1) {
  rl.question('Введите вторую строку', function (myStr2) {
    // ввод данных

    console.log(` Проверка №1`); //выполняется

    emptyStr = ' '; //пустая строка

    console.log(` Проверка №2`); //выполняется

    const myStr1ToArray = myStr1.split([emptyStr[100]]); // преобразование  первой строки в массив

    console.log(` Проверка №3`); //вып

    myStr1ToArray.forEach((now, i) => {
      //анонимная функция для вывода индекса, now - текущее число , i - индекс числа в массиве
      console.log('number-', i, 'it is', now); //вывод числа и его порядкового номера
    });

    console.log(myStr1ToArray.length);// количество символов в  массиве

    process.exit(1); //закрытие дальнейшего ввода
  });
});
