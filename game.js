const readline = require('readline');
const rl = readline.createInterface({
  //создание экземпляра путем настройки читаемых и записываемых потоков
  input: process.stdin, //этот ключ принимает считываемый потом
  output: process.stdout, //ключ принимает перезаписываемый потом
});

let player1 = '';
let player2 = '';

let StrA1 = ' ';
let StrB1 = ' ';
let StrC1 = ' ';
let StrA2 = ' ';
let StrB2 = ' ';
let StrC2 = ' ';
let StrA3 = ' ';
let StrB3 = ' ';
let StrC3 = ' ';

function paintPole() {
  console.log(
    `\n     |   A   |   B   |   C   | \n    ---------------------------\n     |       |       |       |\n    1|   ${StrA1}   |   ${StrB1}   |   ${StrC1}   |\n     |       |       |       |\n    ---------------------------\n     |       |       |       |\n    2|   ${StrA2}   |   ${StrB2}   |   ${StrC2}   |\n     |       |       |       |\n    ---------------------------\n     |       |       |       |\n    3|   ${StrA3}   |   ${StrB3}   |   ${StrC3}   |\n     |       |       |       |\n    --------------------------- `
  );
}

function makeMove(player, move) {
  let problem =  0;

  if (move == `A1`) {
    if (StrA1 == ' ') {
      StrA1 = player;
    }
  } else if (move == `A2`) {
    if (StrA2 == ' ') {
      StrA2 = player;
    }
  } else if (move == `A3`) {
    if (StrA3 == ' ') {
      StrA3 = player;
    }
  } else if (move == `B1`) {
    if (StrB1 == ' ') {
      StrB1 = player;
    }
  } else if (move == `B2`) {
    if (StrB2 == ' ') {
      StrB2 = player;
    }
  } else if (move == `B3`) {
    if (StrB3 == ' ') {
      StrB3 = player;
    }
  } else if (move == `C1`) {
    if (StrC1 == ' ') {
      StrC1 = player;
    }
  } else if (move == `C2`) {
    if (StrC2 == ' ') {
      StrC2 = player;
    }
  } else if (move == `C3`) {
    if (StrC3 == ' ') {
      StrC3 = player;
    }
  } else {
    console.log('Incorrect params');
    problem = 1;
  }
  return problem;
}

function question(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, resolve);
  });
}

async function game() {
  console.log(
    `\n Игровое поле \n    |   A   |   B   |   C   | \n    ---------------------------\n     |       |       |       |\n    1|   ${StrA1}   |   ${StrB1}   |   ${StrC1}   |\n     |       |       |       |\n    ---------------------------\n     |       |       |       |\n    2|   ${StrA2}   |   ${StrB2}   |   ${StrC2}   |\n     |       |       |       |\n    ---------------------------\n     |       |       |       |\n    3|   ${StrA3}   |   ${StrB3}   |   ${StrC3}   |\n     |       |       |       |\n    ---------------------------`
  );

  const player1 = await question('Player #1, your name: ');
  const player2 = await question('Player #2, your name: ');

  console.log(
    `\n ${player1} use X, ${player2} use O. \n ${player1} goes first. To start the game, you need to make a move. For example : A1.`
  );

  for (let numberMove = 1, win = 0; win === 0; numberMove++) {
    let player;
    if (numberMove % 2 === 1) {
      player = `X`;
    } else {
      player = `0`;
    }
    let move = await question('Make a move: ');

    let problem = makeMove(player, move);

    while (problem === 1){
      move = await question('Make a move: ');
     problem = makeMove(player, move);

    }

    paintPole();

    if (
      (StrA1 === StrA2 && StrA1 === StrA3 && StrA1 === player) ||
      (StrB1 === StrB2 && StrB1 === StrB3 && StrB1 === player) ||
      (StrC1 === StrC2 && StrC1 === StrC3 && StrC1 === player) ||
      (StrA1 === StrB1 && StrA1 === StrC1 && StrA1 === player) ||
      (StrA2 === StrB2 && StrA2 === StrC2 && StrA2 === player) ||
      (StrA3 === StrB3 && StrA3 === StrC3 && StrA3 === player) ||
      (StrA1 === StrB2 && StrA1 === StrC3 && StrA1 === player) ||
      (StrC1 === StrB2 && StrC1 === StrA3 && StrC1 === player)
    ) {
      win = 1;
      if (player === `X`) {
        console.log(` ${player1} is win! Game over.`);
      } else {
        console.log(` ${player2} win! Game over.`);
      }
      process.exit(1); //закрытие дальнейшего ввода, завершение проги
    }

    if (numberMove === 9 && win === 0) {
      console.log(`Sorry. Nobody is a winner.`);
      process.exit(1); //закрытие дальнейшего ввода, завершение проги
    }
  }
}

game();
