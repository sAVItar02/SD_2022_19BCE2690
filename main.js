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
  moveForward: function (player) {
    for (var i = 0; i < this.positions.length; i++) {
      if (this.positions[i][2] === player) {
        if (this.positions[i][0] + 1 <= 4) {
          if (gridInfo[i][0] + 1 == 2) {
            this.positions[i][0] += 1;
            // killPlayer(this.positions[i][2], "B");
          } else if (gridInfo[i][0] + 1 == 0) {
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
          if (gridInfo[i][0] - 1 == 2) {
            this.positions[i][0] -= 1;
            // killPlayer(this.positions[i][2], "B");
          } else if (gridInfo[i][0] - 1 == 0) {
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
  moveForward: function (player) {
    for (var i = 0; i < this.positions.length; i++) {
      if (this.positions[i][2] === player) {
        if (this.positions[i][0] - 1 >= 0) {
          if (gridInfo[i][0] - 1 == 1) {
            this.positions[i][0] -= 1;
            // killPlayer(this.positions[i][2], "A");
          } else if (gridInfo[i][0] - 1 == 0) {
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
          if (gridInfo[i][0] + 1 == 1) {
            this.positions[i][0] += 1;
            // killPlayer(this.positions[i][2], "A");
          } else if (gridInfo[i][0] + 1 == 0) {
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
};

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

displayGrid(playerA.positions, playerB.positions);
