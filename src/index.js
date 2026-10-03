import "./index.css";
import { Game } from "./modules/game.js";

const game = new Game();

const playerBoard = document.querySelector("#player-board");
const computerBoard = document.querySelector("#computer-board");

function renderBoard(board, container) {
  board.forEach((row, y) => {
    const rowElement = document.createElement("div");

    row.forEach((cell, x) => {
      const button = document.createElement("button");

      button.dataset.x = x;
      button.dataset.y = y;

      rowElement.appendChild(button);

      button.addEventListener("click", () => {
        if (board !== game.computer.gameBoard.board) {
          return;
        }

        const coordinate = [Number(button.dataset.x), Number(button.dataset.y)];

        game.playerAttack(coordinate);

        const successfulAttack = game.computer.gameBoard.successfulAttacks.some(
          (attack) => {
            return attack[0] === coordinate[0] && attack[1] === coordinate[1];
          },
        );

        if (successfulAttack) {
          button.textContent = "X";
        } else {
          button.textContent = "O";
        }

        button.disabled = true;

        if (game.gameOver) {
          return;
        }

        const computerCoordinate = game.computerAttack();

        updatePlayerBoard(computerCoordinate);
      });
    });

    container.appendChild(rowElement);
  });
}

function updatePlayerBoard(coordinate) {
  const buttons = playerBoard.querySelectorAll("button");

  buttons.forEach((button) => {
    const x = Number(button.dataset.x);
    const y = Number(button.dataset.y);

    if (x === coordinate[0] && y === coordinate[1]) {
      const successfulAttack = game.player.gameBoard.successfulAttacks.some(
        (attack) => {
          return attack[0] === x && attack[1] === y;
        },
      );

      if (successfulAttack) {
        button.textContent = "X";
      } else {
        button.textContent = "O";
      }

      button.disabled = true;
    }
  });
}

renderBoard(game.player.gameBoard.board, playerBoard);
renderBoard(game.computer.gameBoard.board, computerBoard);
