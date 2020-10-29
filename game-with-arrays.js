const readline = require('readline');
const rl = readline.createInterface({
  //создание экземпляра путем настройки читаемых и записываемых потоков
  input: process.stdin, //этот ключ принимает считываемый потом
  output: process.stdout, //ключ принимает перезаписываемый потом
});

const poleSize = 5;

function question(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, resolve);
  });
}

function paintPole(array) {
  let header = '';
  array.forEach(function (line, index) {
    header += ` ${index} `;
  });
  console.log('', header);

  for (let line = 0; line < array.length; line++) {
    let row = `${line}`;
    array[line].forEach(function (cell) {
      row += `|${cell}|`;
    });
    console.log(row);
  }
}
function makeMove(player, array, line, column) {
  let problem = 0;
  if (array[line][column] === ' ') {
    array[line][column] = player;
  } else {
    console.log('Incorrect params');
    problem = 1;
  }
  return problem;
}
function winLine(player, field) {
  let isWin = 0;
  field.forEach(function (line) {
    let isLineWin = 0;
    line.forEach(function (cell) {
      if (player === cell) {
        isLineWin++;
      }
    });
    if (isLineWin === line.length) {
      isWin = 1;
    }
  });
  return isWin;
}

function winColumn(player, field) {
  let isWin = false;
  const lineSize = field[0].length;

  for (let columnIndex = 0; columnIndex < lineSize; columnIndex++) {
    let isColumnWin = 0;

    for (let lineIndex = 0; lineIndex < lineSize; lineIndex++) {
      if (player === field[lineIndex][columnIndex]) {
        isColumnWin++;
      }
    }

    if (isColumnWin === lineSize) {
      isWin = true;
    }
  }
  return isWin;
}

function winDiagonal(player, field) {
  let isWin = false;
  const lineSize = field[0].length;
  let isDiagonalWin = 0;
  let isDiagonalWin2 = 0;

  for (let diagonalIndex = 0; diagonalIndex < lineSize; diagonalIndex++) {
    if (player === field[diagonalIndex][diagonalIndex]) {
      isDiagonalWin++;
    }
  }

  for (let diagonalIndex = 0; diagonalIndex < lineSize; diagonalIndex++) {
    if (player === field[diagonalIndex][lineSize - 1 - diagonalIndex]) {
      isDiagonalWin2++;
    }
  }

  if (isDiagonalWin === lineSize || isDiagonalWin2 === lineSize) {
    isWin = true;
  }
  return isWin;
}

function makeField() {
  let field = [];
  for (let line = 0; line < poleSize; line++) {
    field[line] = [];
    for (let cell = 0; cell < poleSize; cell++) {
      field[line][cell] = ' ';
    }
  }
  return field;
}

async function game() {
  const field = makeField();
  const player1 = await question('Player #1, your name: ');
  const player2 = await question('Player #2, your name: ');

  paintPole(field);

  console.log(
    `\n ${player1} use X, ${player2} use O. \n ${player1} goes first. To start the game, you need to make a move. For example : 01. Where 0 - it is line and 1 - it is column.`
  );

  for (let numberMove = 1, win = 0; win === 0; numberMove++) {
    let player;
    if (numberMove % 2 === 1) {
      player = `X`;
    } else {
      player = `0`;
    }
    let move = await question('Make a move: ');

    let problem = makeMove(player, field, move[0], move[1]);

    while (problem === 1) {
      move = await question('Make a move: ');
      problem = makeMove(player, field, move[0], move[1]);
    }

    paintPole(field);
    if (winLine(player, field) || winColumn(player, field) || winDiagonal(player, field)) {
      win = 1;

      if (player === `X`) {
        console.log(` ${player1} is win! Game over.`);
      } else {
        console.log(` ${player2} win! Game over.`);
      }
      process.exit(1);
    }

    if (numberMove === poleSize * poleSize && win === 0) {
      console.log(`Sorry. Nobody is a winner.`);
      process.exit(1); //закрытие дальнейшего ввода, завершение проги
    }
  }
}

game();
