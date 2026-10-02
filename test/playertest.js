import assert from "node:assert/strict";
import { mock } from "node:test";
import { Player, Computer } from "../src/modules/player.js";
import { resourceLimits } from "node:worker_threads";

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
  it("When the computer is loaded is the hits array empty", () => {
    const computer = new Computer();
    const result = computer.hits;
    const expected = [];
    assert.deepStrictEqual(result, expected);
  });
  it("on a successful attack, is the computers hits array populated", () => {
    const player = new Player();
    const computer = new Computer();

    player.gameBoard.placeShip("Destroyer", [4, 2], "horizontal");

    const values = [0.4, 0.2];
    let counter = 0;

    mock.method(Math, "random", () => {
      const value = values[counter];
      counter += 1;
      return value;
    });

    computer.attackPlayer(player.gameBoard);

    const result = computer.hits;
    const expected = [[4, 2]];

    assert.deepStrictEqual(result, expected);

    mock.restoreAll();
  });
  it("When the computer makes a miss, the hits array stays empty.", () => {
    const computer = new Computer();
    const player = new Player();
    computer.attackPlayer(player.gameBoard);
    const result = computer.hits;
    const expected = [];
    assert.deepStrictEqual(result, expected);
  });
  it("on a successful attack, the next computer attack is on a neigbouring coordinate", () => {
    const player = new Player();
    const computer = new Computer();

    player.gameBoard.placeShip("Destroyer", [4, 2], "horizontal");

    const values = [0.4, 0.2, 0.1, 0.3];
    let counter = 0;

    mock.method(Math, "random", () => {
      const value = values[counter];
      counter += 1;
      return value;
    });

    computer.attackPlayer(player.gameBoard);
    const result = computer.attackPlayer(player.gameBoard);
    const neighbours = [
      [4, 1],
      [4, 3],
      [3, 2],
      [5, 2],
    ];
    const expected = neighbours.some((coord) => {
      return result[0] === coord[0] && result[1] === coord[1];
    });

    assert.deepStrictEqual(expected, true);

    mock.restoreAll();
  });
  it("continues attacking in the same direction after two consecutive hits", () => {
    const player = new Player();
    const computer = new Computer();

    player.gameBoard.placeShip("Carrier", [4, 2], "vertical");

    const values = [0.4, 0.2];
    let counter = 0;

    mock.method(Math, "random", () => {
      const value = values[counter];
      counter += 1;
      return value;
    });

    computer.attackPlayer(player.gameBoard);

    // Force the first successful hit to be [4,2]
    computer.hits = [[4, 2]];
    computer.targetHits = [[4, 2]];

    computer.attackPlayer(player.gameBoard);

    // Second hit should be [4,3]
    assert.deepStrictEqual(computer.targetHits[1], [4, 3]);

    const result = computer.attackPlayer(player.gameBoard);

    const expected = [4, 4];

    assert.deepStrictEqual(result, expected);

    mock.restoreAll();
  });
  it("returns to the original hit when it cannot continue in the current direction", () => {
    const player = new Player();
    const computer = new Computer();

    player.gameBoard.placeShip("Carrier", [4, 2], "vertical");

    computer.attacks = [
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
      [4, 5],
      [3, 2],
    ];

    computer.hits = [
      [4, 2],
      [4, 3],
      [4, 4],
    ];

    computer.targetHits = [
      [4, 2],
      [4, 3],
      [4, 4],
    ];

    computer.direction = "down";

    const result = computer.attackPlayer(player.gameBoard);

    const expected = [5, 2];

    assert.deepStrictEqual(result, expected);
  });
  it("clears the current target when a ship is destroyed", () => {
    const player = new Player();
    const computer = new Computer();

    player.gameBoard.placeShip("Destroyer", [4, 2], "vertical");

    // Actually hit the first square of the Destroyer
    player.gameBoard.receiveAttack([4, 2]);

    computer.attacks = [[4, 2]];
    computer.hits = [[4, 2]];
    computer.targetHits = [[4, 2]];

    const result = computer.attackPlayer(player.gameBoard);

    assert.deepStrictEqual(result, [4, 3]);
    assert.deepStrictEqual(computer.targetHits, []);
    assert.strictEqual(computer.direction, null);
  });
  it("starts a new random hunt after destroying a ship", () => {
    const player = new Player();
    const computer = new Computer();

    player.gameBoard.placeShip("Destroyer", [4, 2], "vertical");

    // First square has already been hit
    player.gameBoard.receiveAttack([4, 2]);

    computer.attacks = [[4, 2]];
    computer.hits = [[4, 2]];
    computer.targetHits = [[4, 2]];

    // First random value for the new hunt:
    // x = floor(0.7 * 10) = 7
    // y = floor(0.8 * 10) = 8
    const values = [0.7, 0.8];
    let counter = 0;

    mock.method(Math, "random", () => {
      const value = values[counter];
      counter += 1;
      return value;
    });

    // This destroys the Destroyer
    const firstResult = computer.attackPlayer(player.gameBoard);

    assert.deepStrictEqual(firstResult, [4, 3]);
    assert.deepStrictEqual(computer.targetHits, []);

    // Next attack should be a new random attack
    const secondResult = computer.attackPlayer(player.gameBoard);

    assert.deepStrictEqual(secondResult, [7, 8]);

    mock.restoreAll();
  });
});
