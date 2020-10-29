// Задача 2 : числа трибоначи, создать массив , каждое последующее число которого равно сумме трех предыдущих
const readline = require('readline');
const rl = readline.createInterface({
  //создание экземпляра путем настройки читаемых и записываемых потоков
  input: process.stdin, //этот ключ принимает считываемый потом
  output: process.stdout, //ключ принимает перезаписываемый потом
});

console.log(' Числа Трибоначчи — это последовательность целых чисел, которая определяется так: ' +
    'первое, второе и третье числа Трибоначчи равны единице; ' +
    'каждое следующее число Трибоначчи равно сумме трёх предыдущих.\n\n' +
    'В общем, почти как числа Фибоначчи.\n\n' +
    'Вы можете создать свою последовательность по тому же принципу, но со своими тремя первыми числами');

function tribonacciArray(yourArr) {
  let tribArr = yourArr;

  for (let i = 0; i < 10; i++) {
    let pred = tribArr[0 + i];
    let tek = tribArr[1 + i];
    let sled = tribArr[2 + i];
    let summTrib = pred + tek + sled; // считаем следующее число ( сумма предыдущих трех)

    pred = tek;
    tek = sled;
    sled = summTrib; // переприсваиваем значения ( делаем шаг по массиву)
    tribArr.push(summTrib); // добавляем следующий элемент в массив

    //console.log('проверка , готовое следующее число трибоначчи', sled);
  }
  // console.log(tribArr); // выводим массив
  return tribArr;
}

rl.question('Введите первое число', function (firstSymbol) {
  rl.question('Введите второе число', function (secondSymbol) {
    rl.question('Введите третье число', function (trirdSymbol) {
      // ввод данных

      //  console.log('проверка после ввода');

      firstSymbol = Number(firstSymbol);
      secondSymbol = Number(secondSymbol);
      trirdSymbol = Number(trirdSymbol);//преобразуем строки в числа

      const myArr = [];
      myArr.push(firstSymbol);
      myArr.push(secondSymbol);
      myArr.push(trirdSymbol);

      //console.log('проверка после добавления элементов в массив');

      console.log('Ваш массив - ', myArr);

      tribonacciArray(myArr);
      console.log('Ваш массив Трибоначчи - ', myArr);

      //  console.log('проверка после функции трибоначчи');

      process.exit(1); //закрытие дальнейшего ввода, завершение проги
    });
  });
});
