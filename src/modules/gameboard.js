export class GameBoard {
  constructor() {
    this.board = [];
    this.createBoard();
    this.missedAttacks = [];
    this.successfulAttacks = [];
    this.ships = [];
  }
  createBoard() {
    for (let i = 0; i < 10; i++) {
      const rows = [];
      for (let j = 0; j < 10; j++) {
        const array = "x";
        rows.push(array);
      }
      this.board.push(rows);
    }
  }
  placeShip(ship, coordinate, orientation) {
    const x = coordinate[0];
    const y = coordinate[1];

    if (x + ship.length - 1 > 9 && orientation === "horizontal") {
      return false;
    }
    if (y + ship.length - 1 > 9 && orientation === "vertical") {
      return false;
    }
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return false;
    }
    for (let i = 0; i < ship.length; i++) {
      if (this.board[y][x + i] !== "x" && orientation === "horizontal") {
        return false;
      }
      if (this.board[y + i][x] !== "x" && orientation === "vertical") {
        return false;
      }
    }
    for (let i = 0; i < ship.length; i++) {
      if (orientation === "horizontal") {
        this.board[y][x + i] = ship;
      }
      if (orientation === "vertical") {
        this.board[y + i][x] = ship;
      }
    }
    this.ships.push(ship);
  }
  receiveAttack(coordinate) {
    const x = coordinate[0];
    const y = coordinate[1];
    const alreadyMissed = this.missedAttacks.some((attackCoordinate) => {
      if (attackCoordinate[0] === x && attackCoordinate[1] === y) {
        return true;
      }
      return false;
    });
    if (this.board[y][x] === "x" && !alreadyMissed) {
      this.missedAttacks.push([x, y]);
    }
    const alreadyattacked = this.successfulAttacks.some((attackCoordinate) => {
      if (attackCoordinate[0] === x && attackCoordinate[1] === y) {
        return true;
      }
      return false;
    });
    if (typeof this.board[y][x] === "object" && !alreadyattacked) {
      this.board[y][x].hit();
      this.successfulAttacks.push([x, y]);
    }
  }
  allShipsSunk() {
    return this.ships.every((ship) => {
      return ship.destroyed;
    });
  }
}
