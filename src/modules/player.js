import { GameBoard } from "./gameboard.js";

export class Player {
  constructor() {
    this.gameBoard = new GameBoard();
  }
  attack(gameBoard, coordinate) {
    gameBoard.receiveAttack(coordinate);
  }
}

export class Computer extends Player {
  constructor() {
    super();
    this.placeShips();
    this.attacks = [];
  }
  placeShips() {
    this.gameBoard.fleet.forEach((ship) => {
      let orientation = "";
      let coord = null;
      while (!ship.alreadyPlaced) {
        const randomAxisNumber = Math.floor(Math.random() * 2);

        if (randomAxisNumber === 1) {
          orientation = "horizontal";
        } else {
          orientation = "vertical";
        }
        const randomCoordinateNumberX = Math.floor(Math.random() * 10);
        const randomCoordinateNumberY = Math.floor(Math.random() * 10);
        coord = [randomCoordinateNumberX, randomCoordinateNumberY];
        this.gameBoard.placeShip(ship.id, coord, orientation);
      }
    });
  }
  attackPlayer(gameboard) {
    let coord = null;
    let coordCheck = true;
    while (coordCheck) {
      const randomCoordinateNumberX = Math.floor(Math.random() * 10);
      const randomCoordinateNumberY = Math.floor(Math.random() * 10);
      coord = [randomCoordinateNumberX, randomCoordinateNumberY];
      coordCheck = this.attacks.some((item) => {
        return item[0] === coord[0] && item[1] === coord[1];
      });
    }
    this.attack(gameboard, coord);
    this.attacks.push(coord);
    return coord;
  }
}
