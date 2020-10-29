console.log('ty pidor');// вывод надписи
const name1 ='katyusha';
let name2 ='mojno menyaty';
function fun1(param1){//функция корня
    return Math.sqrt(param1)
}
const fun2=(param1)=>{
    return Math.sqrt(param1)//тоже самое что и фан1 только другая запись
}
const koren=fun1(25);
const nameobject ={
    imyapolya: 100,
    imya2: 66
}
nameobject.imya2=99;
console.log('your answer-',koren+nameobject.imya2);
const numberArray=[1,8,3,77,12,4,63,69,22];//делаем массив - объект
numberArray.forEach((now,i)=>{//анонимная функция для вывода индекса, now - текущее число , i - индекс числа в массиве
    console.log('number-',i,'it is', now);
})

const numbers = [1, 6, 9];
console.log(numbers);
console.log(...numbers);//открывает массив и передает просто набор чисел

const array = [1, 2, 3, 5, 6, 7];

function printNumber(number) {
    console.log(number);
}

array.forEach(printNumber);//выполняет функцию с каждым элементом из массива array по очереди