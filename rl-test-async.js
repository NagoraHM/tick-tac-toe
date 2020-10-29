const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, //этот ключ принимает считываемый потом
  output: process.stdout, //ключ принимает перезаписываемый потом
});

function question(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, resolve);
  });
};



async function logic() {

  const firstName = await question('Who are you?');
  console.log(firstName);
  const lastName = await question('What is your last name?');
  console.log(lastName);
}

logic()
