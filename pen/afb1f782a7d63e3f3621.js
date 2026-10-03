import "./index.css";
import { Game } from "./modules/game.js";
const game = new Game();
const playerBoard = document.querySelector("#player-board");
const computerBoard = document.querySelector("#computer-board");

function renderBoard(board, container) {
  board.forEach((row, y) => {
    // create a row
    const rowElement = document.createElement("div");

    row.forEach((cell, x) => {
      const button = document.createElement("button");
      rowElement.appendChild(button);
    });
    container.appendChild(rowElement);
  });
}

renderBoard(game.player.gameBoard.board, playerBoard);
renderBoard(game.computer.gameBoard.board, computerBoard);
