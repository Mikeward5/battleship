import assert from "node:assert/strict";
import { mock } from "node:test";
import { Player, Computer } from "../src/modules/player.js";

describe("When i create a Player", () => {
  it("a GameBoard is created", () => {
    const player = new Player();
    const result = player.gameBoard.board.length;
    const expected = 10;
    assert.strictEqual(result, expected);
  });
  it("player1 can attack player2", () => {
    const player1 = new Player();
    const player2 = new Player();
    player1.attack(player2.gameBoard, [4, 2]);
    const result = player2.gameBoard.missedAttacks;
    const expected = [[4, 2]];
    assert.deepStrictEqual(result, expected);
  });
});

describe("When i create a computer", () => {
  it("a GameBoard is created", () => {
    const computer = new Computer();
    const result = computer.gameBoard.board.length;
    const expected = 10;
    assert.strictEqual(result, expected);
  });
  it("all the ships are already placed", () => {
    const computer = new Computer();
    const result = computer.gameBoard.fleet.every((ship) => {
      return ship.alreadyPlaced === true;
    });
    const expected = true;
    assert.strictEqual(result, expected);
  });
  it("all 5 ships are placed on the gameboard", () => {
    const computer = new Computer();
    const result = computer.gameBoard.ships.length;
    const expected = 5;
    assert.strictEqual(result, expected);
  });
  it("When I ask the Computer for an attack coordinate, it should return an array", () => {
    const computer = new Computer();
    const player = new Player();
    const result = computer.attackPlayer(player.gameBoard);
    const expected = true;
    assert.strictEqual(Array.isArray(result), expected);
  });
  it("When I ask the Computer for an attack coordinate, it should return an array containing two numbers", () => {
    const computer = new Computer();
    const player = new Player();
    const result = computer.attackPlayer(player.gameBoard);
    const expected = 2;
    assert.strictEqual(result.length, expected);
  });
  it("When I ask the Computer for an attack coordinate, it should return an array containing two numbers", () => {
    const computer = new Computer();
    const player = new Player();
    const test = computer.attackPlayer(player.gameBoard);
    const result = Number.isInteger(test[0]) && Number.isInteger(test[1]);
    const expected = true;
    assert.strictEqual(result, expected);
  });
  it("When a Computer is created, it has an empty array for its attack history.", () => {
    const computer = new Computer();
    const result = computer.attacks;
    const expected = [];
    assert.deepStrictEqual(result, expected);
  });
  it("When a Computer uses attackPlayer it stores the coords in the attacks array", () => {
    const computer = new Computer();
    const player = new Player();
    computer.attackPlayer(player.gameBoard);
    const result = computer.attacks;
    const expected = 1;
    assert.strictEqual(result.length, expected);
  });
  it("After calling attackPlayer() twice, attacks should contain two coordinates.", () => {
    const computer = new Computer();
    const player = new Player();
    computer.attackPlayer(player.gameBoard);
    computer.attackPlayer(player.gameBoard);
    const result = computer.attacks.length;
    const expected = 2;
    assert.strictEqual(result, expected);
  });
  it("Computer should discard an attack coordinate it has already used", () => {
    const computer = new Computer();
    const player = new Player();
    const values = [0.5, 0.5, 0.5, 0.5, 0.6, 0.6];
    let counter = 0;

    mock.method(Math, "random", () => {
      const value = values[counter];
      counter += 1;
      return value;
    });

    computer.attackPlayer(player.gameBoard);
    computer.attackPlayer(player.gameBoard);

    const result = computer.attacks;
    const expected = [
      [5, 5],
      [6, 6],
    ];

    assert.deepStrictEqual(result, expected);

    mock.restoreAll();
  });
  it("When Computer.attackPlayer(opponentGameBoard) is called, the opponent's GameBoard receives the attack.", () => {
    const computer = new Computer();
    const player = new Player();
    computer.attackPlayer(player.gameBoard);
    const result = player.gameBoard.missedAttacks.length;
    const expected = 1;
    assert.strictEqual(result, expected);
  });
});
