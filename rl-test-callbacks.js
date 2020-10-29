const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, //этот ключ принимает считываемый потом
  output: process.stdout, //ключ принимает перезаписываемый потом
});

function logic() {
  rl.question('Who are you?', function (firstName) {
    console.log(firstName);
    rl.question('Who are you?', function (lastName) {
      console.log(lastName);
    });
  });
}

logic();
