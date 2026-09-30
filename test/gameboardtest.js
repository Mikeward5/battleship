import assert from "node:assert/strict";
import { GameBoard } from "../src/modules/gameboard.js";
import { Ship } from "../src/modules/ship.js";

describe("When i create the gameboard does it:", () => {
  it("have 10 rows", () => {
    const board = new GameBoard();
    const result = board.board.length;
    const expected = 10;
    assert.strictEqual(result, expected);
  });
  it("Each row have 10 positions", () => {
    const board = new GameBoard();
    const result = board.board[0].length;
    const expected = 10;
    assert.strictEqual(result, expected);
  });
});

describe("when i place a ship", () => {
  it("horizontally at [2,4], it occupies [2,4], [3,4], and [4,4]", () => {
    const board = new GameBoard();
    const ship = new Ship(3);
    board.placeShip(ship, [2, 4], "horizontal");
    const result = [board.board[4][2], board.board[4][3], board.board[4][4]];
    const expected = [ship, ship, ship];
    assert.deepStrictEqual(result, expected);
  });
  it("the ships array is populated", () => {
    const board = new GameBoard();
    const ship = new Ship(1);
    board.placeShip(ship, [4, 2], "horizontal");
    const result = board.ships;
    const expected = [ship];
    assert.deepStrictEqual(result, expected);
  });
  it("vertically at [2,4], it occupies [2,4], [2,5], and [2,6]", () => {
    const board = new GameBoard();
    const ship = new Ship(3);
    board.placeShip(ship, [2, 4], "vertical");
    const result = [board.board[4][2], board.board[5][2], board.board[6][2]];
    const expected = [ship, ship, ship];
    assert.deepStrictEqual(result, expected);
  });
  it("out of bounds horizontally, or something that would go out of bounds", () => {
    const board = new GameBoard();
    const ship = new Ship(3);
    const result = board.placeShip(ship, [8, 4], "horizontal");
    const expected = false;
    assert.strictEqual(result, expected);
  });
  it("out of bounds vertically, or something that would go out of bounds", () => {
    const board = new GameBoard();
    const ship = new Ship(3);
    const result = board.placeShip(ship, [8, 8], "vertical");
    const expected = false;
    assert.strictEqual(result, expected);
  });
  it("allows placement of a ship with invalid y coordinate", () => {
    const board = new GameBoard();
    const ship = new Ship(3);
    const result = board.placeShip(ship, [2, 10], "horizontal");
    const expected = false;
    assert.strictEqual(result, expected);
  });
  it("allows placement of a ship with invalid x coordinate", () => {
    const board = new GameBoard();
    const ship = new Ship(3);
    const result = board.placeShip(ship, [10, 2], "horizontal");
    const expected = false;
    assert.strictEqual(result, expected);
  });
  it("allows placement of a ship with invalid negative x coordinate", () => {
    const board = new GameBoard();
    const ship = new Ship(3);
    const result = board.placeShip(ship, [-1, 4], "horizontal");
    const expected = false;
    assert.strictEqual(result, expected);
  });
  it(" does not allow the placement of a ship that overlaps another", () => {
    const board = new GameBoard();
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);
    board.placeShip(ship1, [2, 4], "horizontal");
    const result = board.placeShip(ship2, [4, 4], "horizontal");
    const expected = false;
    assert.strictEqual(result, expected);
  });
});

describe("when using receiveAttack()", () => {
  it("records an empty coordinate as a missed attack", () => {
    const board = new GameBoard();
    board.receiveAttack([4, 2]);
    const result = board.missedAttacks;
    const expected = [[4, 2]];
    assert.deepStrictEqual(result, expected);
  });
  it("When I attack a coordinate containing a ship, that ship loses 1 hit point.", () => {
    const board = new GameBoard();
    const ship = new Ship(3);
    board.placeShip(ship, [4, 2], "horizontal");
    board.receiveAttack([4, 2]);
    const result = ship.hitPoints;
    const expected = 2;
    assert.strictEqual(result, expected);
  });
  it("When I successfully hit a ship, is that coordinate recorded in successfulAttacks", () => {
    const board = new GameBoard();
    const ship = new Ship(3);
    board.placeShip(ship, [4, 2], "horizontal");
    board.receiveAttack([4, 2]);
    const result = board.successfulAttacks;
    const expected = [[4, 2]];
    assert.deepStrictEqual(result, expected);
  });
  it("recognise that [4, 2] has already been attacked", () => {
    const board = new GameBoard();
    const ship = new Ship(3);
    board.placeShip(ship, [4, 2], "horizontal");
    board.receiveAttack([4, 2]);
    board.receiveAttack([4, 2]);
    const result = board.successfulAttacks;
    const expected = [[4, 2]];
    assert.deepStrictEqual(result, expected);
  });
  it("recognise that [4, 2] has already been attacked but missed", () => {
    const board = new GameBoard();
    board.receiveAttack([4, 2]);
    board.receiveAttack([4, 2]);
    const result = board.missedAttacks;
    const expected = [[4, 2]];
    assert.deepStrictEqual(result, expected);
  });
  it("Attacking a destroyed ship again does not record the coordinates twice", () => {
    const board = new GameBoard();
    const ship = new Ship(1);
    board.placeShip(ship, [4, 2], "horizontal");
    board.receiveAttack([4, 2]);
    board.receiveAttack([4, 2]);
    const result = board.successfulAttacks;
    const expected = [[4, 2]];
    assert.deepStrictEqual(result, expected);
  });
});

describe("when i use allShipsSunk()", () => {
  it("if board has one ship that hasnt been attacked yet, are all ships sunk", () => {
    const board = new GameBoard();
    const ship = new Ship(1);
    board.placeShip(ship, [4, 2], "horizontal");
    const result = board.allShipsSunk();
    const expected = false;
    assert.strictEqual(result, expected);
  });
  it("if board has one ship that has been destroyed, are all ships sunk", () => {
    const board = new GameBoard();
    const ship = new Ship(1);
    board.placeShip(ship, [4, 2], "horizontal");
    board.receiveAttack([4, 2]);
    const result = board.allShipsSunk();
    const expected = true;
    assert.strictEqual(result, expected);
  });
  it("if board has two ships and one ship is destroyed, are all ships classed as sunk", () => {
    const board = new GameBoard();
    const ship1 = new Ship(1);
    const ship2 = new Ship(1);
    board.placeShip(ship1, [4, 2], "horizontal");
    board.placeShip(ship2, [2, 4], "horizontal");
    board.receiveAttack([4, 2]);
    const result = board.allShipsSunk();
    const expected = false;
    assert.strictEqual(result, expected);
  });
  it("if board has two ships and both ships are destroyed, are all ships classed as sunk", () => {
    const board = new GameBoard();
    const ship1 = new Ship(1);
    const ship2 = new Ship(1);
    board.placeShip(ship1, [4, 2], "horizontal");
    board.placeShip(ship2, [2, 4], "horizontal");
    board.receiveAttack([4, 2]);
    board.receiveAttack([2, 4]);
    const result = board.allShipsSunk();
    const expected = true;
    assert.strictEqual(result, expected);
  });
});
