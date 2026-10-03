import assert from "node:assert/strict";
import { Game } from "../src/modules/game.js";
import { GameBoard } from "../src/modules/gameboard.js";

describe("When i create a game", () => {
  it("creates a player", () => {
    const game = new Game();
    const result = game.player;

    assert.ok(result);
  });
  it("creates a computer", () => {
    const game = new Game();
    const result = game.computer;

    assert.ok(result);
  });
  it("The player should start first", () => {
    const game = new Game();
    const result = game.turn;
    const expected = "player";
    assert.strictEqual(result, expected);
  });
  it("switchTurn changes to computer", () => {
    const game = new Game();
    game.switchTurn();
    const result = game.turn;
    const expected = "computer";
    assert.strictEqual(result, expected);
  });
  it("switchTurn changes to computer to player", () => {
    const game = new Game();
    game.switchTurn();
    game.switchTurn();
    const result = game.turn;
    const expected = "player";
    assert.strictEqual(result, expected);
  });
  it("When the player takes a turn, their attack should be sent to the computer's GameBoard.", () => {
    const game = new Game();
    game.playerAttack([4, 2]);
    const result = game.computer.gameBoard.missedAttacks.length;
    const expected = 1;
    assert.strictEqual(result, expected);
  });
  it("When a player attacks the turn changes to the computer", () => {
    const game = new Game();
    game.playerAttack([4, 2]);
    const result = game.turn;
    const expected = "computer";
    assert.strictEqual(result, expected);
  });
  it("When a computer attacks the turn changes to the player", () => {
    const game = new Game();
    game.switchTurn();
    game.computerAttack();
    const result = game.turn;
    const expected = "player";
    assert.strictEqual(result, expected);
  });
  it("when a new game is created the gameOver state is false", () => {
    const game = new Game();
    const result = game.gameOver;
    const expected = false;
    assert.strictEqual(result, expected);
  });
  it("when a new game is created the winner state is null", () => {
    const game = new Game();
    const result = game.winner;
    const expected = null;
    assert.strictEqual(result, expected);
  });
  it("when all ships destroyed gameOver turns to true", () => {
    const game = new Game();
    game.player.gameBoard.placeShip("Destroyer", [4, 2], "horizontal");
    game.player.gameBoard.receiveAttack([4, 2]);
    game.player.gameBoard.receiveAttack([5, 2]);
    game.checkGameOver();
    assert.strictEqual(game.gameOver, true);
    assert.strictEqual(game.winner, "computer");
  });
  it("when all computer ships are destroyed gameOver turns to true", () => {
    const game = new Game();

    game.computer.gameBoard.ships.forEach((ship) => {
      ship.destroyed = true;
    });

    game.checkGameOver();

    assert.strictEqual(game.gameOver, true);
    assert.strictEqual(game.winner, "player");
  });
  it("returns false when there are no ships", () => {
    const gameBoard = new GameBoard();

    assert.strictEqual(gameBoard.allShipsSunk(), false);
  });
  it("When the game is already over, the player cannot attack.", () => {
    const game = new Game();
    game.gameOver = true;
    game.playerAttack([4, 2]);
    const result = game.computer.gameBoard.missedAttacks.length;
    const expected = 0;
    assert.strictEqual(result, expected);
  });
  it("When a game is already over, the computer cannot attack", () => {
    const game = new Game();
    game.switchTurn();
    game.gameOver = true;
    game.computerAttack();
    const result = game.player.gameBoard.missedAttacks.length;
    const expected = 0;
    assert.strictEqual(result, expected);
  });
});
