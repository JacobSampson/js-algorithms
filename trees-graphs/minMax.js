const MOVES = Object.freeze({
  N: Symbol("n"),
  NE: Symbol("ne"),
  E: Symbol("e"),
  SE: Symbol("se"),
  S: Symbol("s"),
  SW: Symbol("sw"),
  W: Symbol("w"),
  NW: Symbol("nw"),
});

class Cell {
  constructor(i, j, board) {
    this.i = i;
    this.j = j;
    this.board = board;

    this.visited = false;
    this.blocked = false;
    this.player = null;
  }

  getPossibleMoves() {
    let possibleMoves = [];

    // N
    if (this.isValid(this.i, this.j - 1)) {
      possibleMoves.unshift(MOVES.N);
    }
    // NE
    if (this.isValid(this.i + 1, this.j - 1)) {
      possibleMoves.unshift(MOVES.NE);
    }
    // E
    if (this.isValid(this.i + 1, this.j)) {
      possibleMoves.unshift(MOVES.E);
    }
    // SE
    if (this.isValid(this.i + 1, this.j + 1)) {
      possibleMoves.unshift(MOVES.SE);
    }
    // S
    if (this.isValid(this.i, this.j + 1)) {
      possibleMoves.unshift(MOVES.S);
    }
    // SW
    if (this.isValid(this.i - 1, this.j + 1)) {
      possibleMoves.unshift(MOVES.SW);
    }
    // W
    if (this.isValid(this.i - 1, this.j)) {
      possibleMoves.unshift(MOVES.W);
    }
    // NW
    if (this.isValid(this.i - 1, this.j - 1)) {
      possibleMoves.unshift(MOVES.NW);
    }

    return possibleMoves;
  }

  isValid(i, j) {
    return (
      j >= 0 &&
      j < this.board.length &&
      i >= 0 &&
      i < this.board[0].length &&
      !this.board[j][i].visited
    );
  }
}

class Game {
  constructor(nRow, nCol) {
    this.board = [];
    for (let j = 0; j < nRow; ++j) {
      let newRow = [];
      for (let i = 0; i < nCol; ++i) {
        newRow.push(new Cell(i, j, this.board));
      }
      this.board.push(newRow);
    }

    // MiniMax access count
    this.miniMax = 0;

    // Players
    this.board[0][0].player = 1;
    this.board[0][0].visited = true;
    this.board[nRow - 1][nCol - 1].player = 2;
    this.board[nRow - 1][nCol - 1].visited = true;

    // Obstacles
    const obstacles = [
      [0, 1],
      [2, 0],
      [4, 5],
      [2, 3],
      [2, 2],
      [2, 4],
    ];
    obstacles.forEach(
      (point) => (this.board[point[0]][point[1]].visited = true),
    );
  }

  getPlayerCellIndices(player) {
    let cells = [];
    this.board.forEach((row, j) =>
      row.forEach((cell, i) => {
        if (cell.player === player) {
          cells = [j, i];
        }
      }),
    );
    return cells;
  }

  getPlayerCell(player) {
    const [j, i] = this.getPlayerCellIndices(player);
    return this.board[j][i];
  }

  move(player, direction) {
    const [j, i] = this.getPlayerCellIndices(player);
    this.board[j][i].player = null;

    try {
      // N
      if (direction == MOVES.N) {
        this.board[j - 1][i].visited = true;
        this.board[j - 1][i].player = player;
      }
      // NE
      if (direction == MOVES.NE) {
        this.board[j - 1][i + 1].visited = true;
        this.board[j - 1][i + 1].player = player;
      }
      // E
      if (direction == MOVES.E) {
        this.board[j][i + 1].visited = true;
        this.board[j][i + 1].player = player;
      }
      // SE
      if (direction == MOVES.SE) {
        this.board[j + 1][i + 1].visited = true;
        this.board[j + 1][i + 1].player = player;
      }
      // S
      if (direction == MOVES.S) {
        this.board[j + 1][i].visited = true;
        this.board[j + 1][i].player = player;
      }
      // SW
      if (direction == MOVES.SW) {
        this.board[j + 1][i - 1].visited = true;
        this.board[j + 1][i - 1].player = player;
      }
      // W
      if (direction == MOVES.W) {
        this.board[j][i - 1].visited = true;
        this.board[j][i - 1].player = player;
      }
      // NW
      if (direction == MOVES.NW) {
        this.board[j - 1][i - 1].visited = true;
        this.board[j - 1][i - 1].player = player;
      }
    } catch (err) {
      const y = this.getPlayerCell(1);
      const g = y.getPossibleMoves();
      const h = 0;
    }
  }

  toString() {
    let string = "";
    this.board.forEach((row) => {
      // string = string + row.map(cell => `[${cell.j}, ${cell.i}]`)
      string =
        string +
        row.map(
          (cell) => `${cell.player ? cell.player : cell.visited ? "X" : "_"}`,
        );

      string = string + "\n";
    });
    return string;
  }

  getMinimaxValue() {
    this.miniMax++;

    const [i1, j1] = this.getPlayerCellIndices(1);
    const [i2, j2] = this.getPlayerCellIndices(2);

    return Math.sqrt(Math.pow(i1 - i2, 2) + Math.pow(j1 - j2, 2));
  }

  getAction(depthLimit) {
    const nextMove = null;

    const thisPlayer = this.getPlayerCell(1);
    const possibleMoves = thisPlayer.getPossibleMoves();
    let maxVal = -Number.MAX_VALUE;
    let maxMove = null;

    for (let i = 0; i < possibleMoves.length; ++i) {
      let currMove = possibleMoves[i];
      let currVal = this.chooseMove(depthLimit, true, currMove);
      if (currVal > maxVal) {
        maxVal = currVal;
        maxMove = currMove;
      }
    }

    return maxMove;
  }

  chooseMove(depthLimit, isMax, nextAction) {
    if (isMax) {
      this.move(1, nextAction);
    } else {
      this.move(2, nextAction);
    }
    let otherPlayer = this.getPlayerCell(2);
    let thisPlayer = this.getPlayerCell(1);
    console.log(this.toString());

    if (depthLimit === 0) {
      let miniMax = this.getMinimaxValue();
      thisPlayer.visited = false;
      console.log(this.toString());

      this.move(1, this.getOppositeAction(nextAction));
      console.log(this.toString());
      return miniMax;
    } else if (isMax && otherPlayer.getPossibleMoves().length == 0) {
      thisPlayer.visited = false;
      this.move(1, this.getOppositeAction(nextAction));
      return Number.MAX_VALUE;
    }

    let currMax = -Number.MAX_VALUE;

    let possibleMoves = [];

    if (!isMax) {
      possibleMoves = thisPlayer.getPossibleMoves();
    } else {
      possibleMoves = otherPlayer.getPossibleMoves();
    }

    for (let i = 0; i < possibleMoves.length; ++i) {
      let currMove = possibleMoves[i];
      let moveMax = this.chooseMove(
        !isMax ? depthLimit - 1 : depthLimit,
        !isMax,
        currMove,
      );

      if (!isMax && moveMax > currMax) {
        currMax = moveMax;
      }
      if (isMax && moveMax < currMax) {
        currMax = moveMax;
      }
    }

    if (isMax) {
      thisPlayer.visited = false;
      this.move(1, this.getOppositeAction(nextAction));
    } else {
      otherPlayer.visited = false;
      this.move(2, this.getOppositeAction(nextAction));
    }
    return currMax;
  }

  getOppositeAction(action) {
    switch (action) {
      // N
      case MOVES.N:
        return MOVES.S;
      // NE
      case MOVES.NE:
        return MOVES.SW;
      // E
      case MOVES.E:
        return MOVES.W;
      // SE
      case MOVES.SE:
        return MOVES.NW;
      // S
      case MOVES.S:
        return MOVES.N;
      // SW
      case MOVES.SW:
        return MOVES.NE;
      // W
      case MOVES.W:
        return MOVES.E;
      // NW
      case MOVES.NW:
        return MOVES.SE;
      default:
        throw new Error();
    }
  }
}

(() => {
  const game = new Game(6, 6);
  console.log(game.toString());

  let depthLimit = 3;
  console.log(game.getAction(depthLimit));
})();
