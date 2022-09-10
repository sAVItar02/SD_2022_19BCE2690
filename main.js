/* 
    ! Movement Logic
*/
document.querySelector(".currentTurn").innerHTML = "Current Turn: A";

const grid = document.querySelector(".grid");

let gridInfo = [
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [2, 2, 2, 2, 2],
];

let playerA = {
  name: "Player A",
  score: 0,
  color: "red",
  positions: [
    [0, 0, "P1", true],
    [0, 1, "P2", true],
    [0, 2, "P3", true],
    [0, 3, "P4", true],
    [0, 4, "P5", true],
  ],
  currentSelected: "P1",
  moveForward: function (player) {
    for (var i = 0; i < this.positions.length; i++) {
      if (this.positions[i][2] === player) {
        if (this.positions[i][0] + 1 <= 4) {
          if (gridInfo[this.positions[i][0] + 1][this.positions[i][1]] == 2) {
            // update gridInfo
            gridInfo[this.positions[i][0] + 1][this.positions[i][1]] = 1;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][0] += 1;
            killPlayer(playerB.positions[i][2], "B");
          } else if (
            gridInfo[this.positions[i][0] + 1][this.positions[i][1]] == 0
          ) {
            // update gridInfo
            gridInfo[this.positions[i][0] + 1][this.positions[i][1]] = 1;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            // update positions
            this.positions[i][0] += 1;
          } else {
            alert("Already occupied by your own player");
          }
        } else {
          alert("Invalid Move");
        }
      }
    }
    clearGrid();
    displayGrid(this.positions, playerB.positions);
  },
  moveBackward: function (player) {
    for (var i = 0; i < this.positions.length; i++) {
      if (this.positions[i][2] === player) {
        if (this.positions[i][0] - 1 >= 0) {
          if (gridInfo[this.positions[i][0] - 1][this.positions[i][1]] == 2) {
            gridInfo[this.positions[i][0] - 1][this.positions[i][1]] = 1;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][0] -= 1;
            killPlayer(playerB.positions[i][2], "B");
          } else if (
            gridInfo[this.positions[i][0] - 1][this.positions[i][0]] == 0
          ) {
            gridInfo[this.positions[i][0] - 1][this.positions[i][1]] = 1;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][0] -= 1;
          } else {
            alert("Already occupied by your own player");
          }
        } else {
          alert("Invalid Move");
        }
      }
    }
    clearGrid();
    displayGrid(this.positions, playerB.positions);
  },
  moveLeft: function (player) {
    for (var i = 0; i < this.positions.length; i++) {
      if (this.positions[i][2] === player) {
        if (this.positions[i][1] - 1 >= 0) {
          if (gridInfo[this.positions[i][0]][this.positions[i][1] - 1] == 2) {
            gridInfo[this.positions[i][0]][this.positions[i][1] - 1] = 1;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][1] -= 1;
            killPlayer(playerB.positions[i - 1][2], "B");
          } else if (
            gridInfo[this.positions[i][0]][this.positions[i][1] - 1] == 0
          ) {
            gridInfo[this.positions[i][0]][this.positions[i][1] - 1] = 1;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][1] -= 1;
          } else {
            alert("Already occupied by your own player");
          }
        } else {
          alert("Invalid Move");
        }
      }
    }
    clearGrid();
    displayGrid(this.positions, playerB.positions);
  },
  moveRight: function (player) {
    for (var i = 0; i < this.positions.length; i++) {
      if (this.positions[i][2] === player) {
        if (this.positions[i][1] + 1 <= 4) {
          if (gridInfo[this.positions[i][0]][this.positions[i][1] + 1] == 2) {
            gridInfo[this.positions[i][0]][this.positions[i][1] + 1] = 1;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][1] += 1;
            killPlayer(playerB.positions[i + 1][2], "B");
          } else if (
            gridInfo[this.positions[i][0]][this.positions[i][1] + 1] == 0
          ) {
            gridInfo[this.positions[i][0]][this.positions[i][1] + 1] = 1;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][1] += 1;
          } else {
            alert("Already occupied by your own player");
          }
        } else {
          alert("Invalid Move");
        }
      }
    }
    clearGrid();
    displayGrid(this.positions, playerB.positions);
  },
};

let playerB = {
  name: "Player B",
  score: 0,
  color: "blue",
  positions: [
    [4, 0, "P1", true],
    [4, 1, "P2", true],
    [4, 2, "P3", true],
    [4, 3, "P4", true],
    [4, 4, "P5", true],
  ],
  currentSelected: "P1",
  moveForward: function (player) {
    for (var i = 0; i < this.positions.length; i++) {
      if (this.positions[i][2] === player) {
        if (this.positions[i][0] - 1 >= 0) {
          if (gridInfo[this.positions[i][0] - 1][this.positions[i][1]] == 1) {
            gridInfo[this.positions[i][0] - 1][this.positions[i][1]] = 2;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][0] -= 1;
            killPlayer(playerA.positions[i][2], "A");
          } else if (
            gridInfo[this.positions[i][0] - 1][this.positions[i][1]] == 0
          ) {
            gridInfo[this.positions[i][0] - 1][this.positions[i][1]] = 2;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][0] -= 1;
          } else {
            alert("Already Occupied by your own player");
          }
        } else {
          alert("Invalid Move");
        }
      }
    }
    clearGrid();
    displayGrid(playerA.positions, this.positions);
  },
  moveBackward: function (player) {
    for (var i = 0; i < this.positions.length; i++) {
      if (this.positions[i][2] === player) {
        if (this.positions[i][0] + 1 <= 4) {
          if (gridInfo[this.positions[i][0] + 1][this.positions[i][1]] == 1) {
            gridInfo[this.positions[i][0] + 1][this.positions[i][1]] = 2;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][0] += 1;
            killPlayer(playerA.positions[i][2], "A");
          } else if (
            gridInfo[this.positions[i][0] + 1][this.positions[i][1]] == 0
          ) {
            gridInfo[this.positions[i][0] + 1][this.positions[i][1]] = 2;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][0] += 1;
          } else {
            alert("Already Occupied by your own player");
          }
        } else {
          alert("Ivalid Move");
        }
      }
    }
    clearGrid();
    displayGrid(playerA.positions, this.positions);
  },
  moveLeft: function (player) {
    for (var i = 0; i < this.positions.length; i++) {
      if (this.positions[i][2] === player) {
        if (this.positions[i][1] - 1 >= 0) {
          if (gridInfo[this.positions[i][0]][this.positions[i][1] - 1] == 1) {
            gridInfo[this.positions[i][0]][this.positions[i][1] - 1] = 2;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][1] -= 1;
            killPlayer(playerA.positions[i - 1][2], "A");
          } else if (
            gridInfo[this.positions[i][0]][this.positions[i][1] - 1] == 0
          ) {
            gridInfo[this.positions[i][0]][this.positions[i][1] - 1] = 2;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][1] -= 1;
          } else {
            alert("Already Occupied by your own player");
          }
        } else {
          alert("Invalid Move");
        }
      }
    }
    clearGrid();
    displayGrid(playerA.positions, this.positions);
  },
  moveRight: function (player) {
    for (var i = 0; i < this.positions.length; i++) {
      if (this.positions[i][2] === player) {
        if (this.positions[i][1] + 1 <= 4) {
          if (gridInfo[this.positions[i][0]][this.positions[i][1] + 1] == 1) {
            gridInfo[this.positions[i][0]][this.positions[i][1] + 1] = 2;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][1] += 1;
            killPlayer(playerA.positions[i + 1][2], "A");
          } else if (
            gridInfo[this.positions[i][0]][this.positions[i][1] + 1] == 0
          ) {
            gridInfo[this.positions[i][0]][this.positions[i][1] + 1] = 2;
            gridInfo[this.positions[i][0]][this.positions[i][1]] = 0;

            this.positions[i][1] += 1;
          } else {
            alert("Already Occupied by your own player");
          }
        } else {
          alert("Invalid Move");
        }
      }
    }
    clearGrid();
    displayGrid(playerA.positions, this.positions);
  },
};

function killPlayer(player, playerKilled) {
  if (playerKilled === "A") {
    for (var i = 0; i < playerA.positions.length; i++) {
      if (playerA.positions[i][2] === player) {
        playerA.positions[i][3] = false;
        playerB.score += 1;
        document.querySelector(`.A-${playerA.positions[i][2]}`).style.display =
          "none";
        console.log("Player B killed Player A");
        changeSelection("A");
      }
    }
  } else {
    for (var i = 0; i < playerB.positions.length; i++) {
      if (playerB.positions[i][2] === player) {
        playerB.positions[i][3] = false;
        playerA.score += 1;
        document.querySelector(`.B-${playerB.positions[i][2]}`).style.display =
          "none";
        changeSelection("B");
        console.log("Player A killed Player B");
      }
    }
  }
}

function displayGrid(positionA, positionB) {
  for (var i = 0; i < positionA.length; i++) {
    if (positionA[i][3]) {
      document.querySelector(
        `#square-${positionA[i][0]}-${positionA[i][1]}`
      ).innerHTML = `<div class="playerA-P${i + 1} playerA">A-P${i + 1}</div>`;
    }
  }
  for (var i = 0; i < positionB.length; i++) {
    if (positionB[i][3]) {
      document.querySelector(
        `#square-${positionB[i][0]}-${positionB[i][1]}`
      ).innerHTML = `<div class="playerB-P${i + 1} playerB">B-P${i + 1}</div>`;
    }
  }
}

function clearGrid() {
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      document.querySelector(`#square-${i}-${j}`).innerHTML = "";
    }
  }
}

function displayGridInfo() {
  console.log(gridInfo);
}

function displayPlayerStats() {
  console.log(playerA);
  console.log(playerB);
}

displayGrid(playerA.positions, playerB.positions);

displayGridInfo();
displayPlayerStats();

/* 
    ! Game Logic 
*/

let gameLogic = {
  currentTurn: "A",
  playerA: playerA,
  playerB: playerB,
  gridInfo: gridInfo,
  isGameOver: false,
};

function ATurn(moveType) {
  if (gameLogic.currentTurn === "A" && gameLogic.isGameOver == false) {
    if (moveType === "up") {
      playerA.moveBackward(playerA.currentSelected);
      displayGridInfo();
      displayPlayerStats();
    } else if (moveType === "down") {
      playerA.moveForward(playerA.currentSelected);
      displayGridInfo();
      displayPlayerStats();
    } else if (moveType === "left") {
      playerA.moveLeft(playerA.currentSelected);
      displayGridInfo();
      displayPlayerStats();
    } else if (moveType === "right") {
      playerA.moveRight(playerA.currentSelected);
      displayGridInfo();
      displayPlayerStats();
    }
    checkWin();
    document.querySelector(".currentTurn").innerHTML = "Current Turn: B";
    document.querySelector(
      ".currentSelected"
    ).innerHTML = `Current Selected: ${playerB.currentSelected}`;
    updateScore();
    gameLogic.currentTurn = "B";
    disableButtons("A");
    enableButtons("B");
  } else {
    alert("Not your turn");
  }
}

function BTurn(moveType) {
  if (gameLogic.currentTurn === "B" && gameLogic.isGameOver == false) {
    if (moveType === "up") {
      playerB.moveForward(playerB.currentSelected);
      displayGridInfo();
      displayPlayerStats();
    } else if (moveType === "down") {
      playerB.moveBackward(playerB.currentSelected);
      displayGridInfo();
      displayPlayerStats();
    } else if (moveType === "left") {
      playerB.moveLeft(playerB.currentSelected);
      displayGridInfo();
      displayPlayerStats();
    } else if (moveType === "right") {
      playerB.moveRight(playerB.currentSelected);
      displayGridInfo();
      displayPlayerStats();
    }
    document.querySelector(".currentTurn").innerHTML = "Current Turn: A";
    document.querySelector(
      ".currentSelected"
    ).innerHTML = `Current Selected: ${playerA.currentSelected}`;
    checkWin();
    updateScore();
    gameLogic.currentTurn = "A";
    disableButtons("B");
    enableButtons("A");
  } else {
    alert("Not your turn");
  }
}

function checkWin() {
  if (playerA.score == 5) {
    gameLogic.isGameOver = true;
    alert("Player A Wins");
    resetGame();
  } else if (playerB.score == 5) {
    gameLogic.isGameOver = true;
    alert("Player B Wins");
    resetGame();
  }
}

function resetGame() {
  if (gameLogic.isGameOver) {
    (playerA.positions = [
      [0, 0, "A-P1", true],
      [0, 1, "A-P2", true],
      [0, 2, "A-P3", true],
      [0, 3, "A-P4", true],
      [0, 4, "A-P5", true],
    ]),
      (playerA.score = 0);
    playerB.positions = [
      [4, 0, "B-P1", true],
      [4, 1, "B-P2", true],
      [4, 2, "B-P3", true],
      [4, 3, "B-P4", true],
      [4, 4, "B-P5", true],
    ];
    playerB.score = 0;
    isGameOver = false;
    gameLogic.currentTurn = "A";
    gridInfo = [
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2],
    ];
  }
  displayGrid(playerA.positions, playerB.positions);
}

function changeSelection(player) {
  if (player === "A") {
    for (var i = 0; i < playerA.positions.length; i++) {
      if (playerA.positions[i][3]) {
        playerA.currentSelected = playerA.positions[i][2];
      }
    }
  } else {
    for (var i = 0; i < playerB.positions.length; i++) {
      if (playerB.positions[i][3]) {
        playerB.currentSelected = playerB.positions[i][2];
      }
    }
  }
}

function disableButtons(player) {
  if (player === "A") {
    document.querySelector("#A-up").disabled = true;
    document.querySelector("#A-down").disabled = true;
    document.querySelector("#A-left").disabled = true;
    document.querySelector("#A-right").disabled = true;
  } else {
    document.querySelector("#B-up").disabled = true;
    document.querySelector("#B-down").disabled = true;
    document.querySelector("#B-left").disabled = true;
    document.querySelector("#B-right").disabled = true;
  }
}

function enableButtons(player) {
  if (player === "A") {
    document.querySelector("#A-up").disabled = false;
    document.querySelector("#A-down").disabled = false;
    document.querySelector("#A-left").disabled = false;
    document.querySelector("#A-right").disabled = false;
  } else {
    document.querySelector("#B-up").disabled = false;
    document.querySelector("#B-down").disabled = false;
    document.querySelector("#B-left").disabled = false;
    document.querySelector("#B-right").disabled = false;
  }
}

disableButtons("B");

document.querySelector(
  ".currentSelected"
).innerHTML = `Current Selected: ${playerA.currentSelected}`;

function updateScore() {
  document.querySelector(".scoreA").innerHTML = `Score: ${playerA.score}`;
  document.querySelector(".scoreB").innerHTML = `Score: ${playerB.score}`;
}

updateScore();

/* 
    ! Button Press Logic
*/

document.querySelector("#A-up").addEventListener("click", function (e) {
  e.preventDefault();
  ATurn("up");
});
document.querySelector("#A-down").addEventListener("click", function (e) {
  e.preventDefault();
  ATurn("down");
});
document.querySelector("#A-left").addEventListener("click", function (e) {
  e.preventDefault();
  ATurn("left");
});
document.querySelector("#A-right").addEventListener("click", function (e) {
  e.preventDefault();
  ATurn("right");
});

document.querySelector("#B-up").addEventListener("click", function (e) {
  e.preventDefault();
  BTurn("up");
});
document.querySelector("#B-left").addEventListener("click", function (e) {
  e.preventDefault();
  BTurn("left");
});
document.querySelector("#B-right").addEventListener("click", function (e) {
  e.preventDefault();
  BTurn("right");
});
document.querySelector("#B-down").addEventListener("click", function (e) {
  e.preventDefault();
  BTurn("down");
});

document.querySelector(".A-P1").addEventListener("click", function (e) {
  e.preventDefault();
  playerA.currentSelected = "P1";
  document.querySelector(
    ".currentSelected"
  ).innerHTML = `Current Selected: ${playerA.currentSelected}`;
});
document.querySelector(".A-P2").addEventListener("click", function (e) {
  e.preventDefault();
  playerA.currentSelected = "P2";
  document.querySelector(
    ".currentSelected"
  ).innerHTML = `Current Selected: ${playerA.currentSelected}`;
});
document.querySelector(".A-P3").addEventListener("click", function (e) {
  e.preventDefault();
  playerA.currentSelected = "P3";
  document.querySelector(
    ".currentSelected"
  ).innerHTML = `Current Selected: ${playerA.currentSelected}`;
});
document.querySelector(".A-P4").addEventListener("click", function (e) {
  e.preventDefault();
  playerA.currentSelected = "P4";
  document.querySelector(
    ".currentSelected"
  ).innerHTML = `Current Selected: ${playerA.currentSelected}`;
});
document.querySelector(".A-P5").addEventListener("click", function (e) {
  e.preventDefault();
  playerA.currentSelected = "P5";
  document.querySelector(
    ".currentSelected"
  ).innerHTML = `Current Selected: ${playerA.currentSelected}`;
});

document.querySelector(".B-P1").addEventListener("click", function (e) {
  e.preventDefault();
  playerB.currentSelected = "P1";
  document.querySelector(
    ".currentSelected"
  ).innerHTML = `Current Selected: ${playerB.currentSelected}`;
});
document.querySelector(".B-P2").addEventListener("click", function (e) {
  e.preventDefault();
  playerB.currentSelected = "P2";
  document.querySelector(
    ".currentSelected"
  ).innerHTML = `Current Selected: ${playerB.currentSelected}`;
});
document.querySelector(".B-P3").addEventListener("click", function (e) {
  e.preventDefault();
  playerB.currentSelected = "P3";
  document.querySelector(
    ".currentSelected"
  ).innerHTML = `Current Selected: ${playerB.currentSelected}`;
});
document.querySelector(".B-P4").addEventListener("click", function (e) {
  e.preventDefault();
  playerB.currentSelected = "P4";
  document.querySelector(
    ".currentSelected"
  ).innerHTML = `Current Selected: ${playerB.currentSelected}`;
});
document.querySelector(".B-P5").addEventListener("click", function (e) {
  e.preventDefault();
  playerB.currentSelected = "P5";
  document.querySelector(
    ".currentSelected"
  ).innerHTML = `Current Selected: ${playerB.currentSelected}`;
});

// document.querySelectorAll(".square").forEach((square) => {
//   square.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (gameLogic.currentTurn === "A") {

//       console.log(playerA.currentSelected);
//       //   playerA.selectPiece(playerA.currentSelected);
//     } else if (gameLogic.currentTurn === "B") {
//       playerB.currentSelected = square.id.slice(-1);
//       console.log(playerB.currentSelected);
//       //   playerB.selectPiece(playerB.currentSelected);
//     }
//   });
// });

/* 
    ! Reset Game
*/

// document.querySelector("#reset").addEventListener("click", function (e) {
//   e.preventDefault();
//   resetGame();
// });
