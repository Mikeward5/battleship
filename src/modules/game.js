import { Player, Computer } from "./player.js";

export class Game {
  constructor() {
    this.player = new Player();
    this.computer = new Computer();
    this.turn = "player";
    this.gameOver = false;
    this.winner = null;
  }
  switchTurn() {
    if (this.turn === "player") {
      this.turn = "computer";
    } else {
      this.turn = "player";
    }
  }
  playerAttack(coordinate) {
    if (this.gameOver) {
      return;
    }
    this.player.attack(this.computer.gameBoard, coordinate);
    this.switchTurn();
  }
  computerAttack() {
    if (this.gameOver) {
      return;
    }
    this.computer.attackPlayer(this.player.gameBoard);
    this.switchTurn();
  }
  checkGameOver() {
    const playerCondition = this.player.gameBoard.allShipsSunk();
    const computerCondition = this.computer.gameBoard.allShipsSunk();
    if (playerCondition) {
      this.gameOver = true;
      this.winner = "computer";
    } else if (computerCondition) {
      this.gameOver = true;
      this.winner = "player";
    }
  }
}
