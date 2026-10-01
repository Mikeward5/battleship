import assert from "node:assert/strict";
import { Ship } from "../src/modules/ship.js";

describe("When i create a ship with 3 does it:", () => {
  it("Have a length of 3", () => {
    const result = new Ship("test-ship", 3);
    const expected = 3;
    assert.strictEqual(result.length, expected);
  });
  it("has initial hitpoints of 3", () => {
    const result = new Ship("test-ship", 3);
    const expected = 3;
    assert.strictEqual(result.hitPoints, expected);
  });
  it("have the ability to reduce hit point when hit", () => {
    const ship = new Ship("test-ship", 3);
    ship.hit();
    const result = ship.hitPoints;
    const expected = 2;
    assert.strictEqual(result, expected);
  });
  it("Have a destroyed Value of 'false'", () => {
    const ship = new Ship("test-ship", 3);
    const result = ship.destroyed;
    const expected = false;
    assert.strictEqual(result, expected);
  });
  it("has ability to turn destroyed value to true when hit 3 times", () => {
    const ship = new Ship("test-ship", 3);
    ship.hit();
    ship.hit();
    ship.hit();
    const result = ship.destroyed;
    const expected = true;
    assert.strictEqual(result, expected);
  });
  it("not reduce hit points after being destroyed", () => {
    const ship = new Ship("test-ship", 3);
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit();
    const result = ship.hitPoints;
    const expected = 0;
    assert.strictEqual(result, expected);
  });
});
