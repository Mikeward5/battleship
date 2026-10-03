import { Ship } from "./ship.js";

export class GameBoard {
  constructor() {
    this.board = [];
    this.createBoard();
    this.missedAttacks = [];
    this.successfulAttacks = [];
    this.ships = [];
    this.fleet = [];
    this.createFleet();
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
  createFleet() {
    const ships = [
      ["Carrier", 5],
      ["Battleship", 4],
      ["Cruiser", 3],
      ["Submarine", 3],
      ["Destroyer", 2],
    ];
    //forEach create new Ship and push to this.fleet
    ships.forEach((ship) => {
      this.fleet.push(new Ship(ship[0], ship[1]));
    });
  }
  placeShip(id, coordinate, orientation) {
    const x = coordinate[0];
    const y = coordinate[1];

    const ship = this.fleet.find((vessel) => {
      return vessel.id === id;
    });

    if (!ship) {
      return false;
    }

    if (ship.alreadyPlaced) {
      return false;
    }

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
      if (orientation === "horizontal" && this.board[y][x + i] !== "x") {
        return false;
      }
      if (orientation === "vertical" && this.board[y + i][x] !== "x") {
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
    ship.alreadyPlaced = true;
    return true;
  }
  receiveAttack(coordinate) {
    const x = coordinate[0];
    const y = coordinate[1];
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return false;
    }
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
    if (this.ships.length === 0) {
      return false;
    }

    return this.ships.every((ship) => {
      return ship.destroyed;
    });
  }
}
