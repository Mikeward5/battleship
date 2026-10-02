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
    this.hits = [];
    this.targetHits = [];
    this.direction = null;
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

    // No current target: random attack
    if (this.targetHits.length === 0) {
      coord = this.getRandomAttack();
    }

    // We have one hit on the current target
    else if (this.targetHits.length === 1) {
      coord = this.getNeighbourAttack(this.targetHits[0]);

      if (coord) {
        this.direction = this.getDirection(this.targetHits[0], coord);
      }
    }

    // We have multiple hits on the current target
    else {
      const lastHit = this.targetHits[this.targetHits.length - 1];

      const nextCoordinate = this.getNextInDirection(lastHit, this.direction);

      if (nextCoordinate && this.isValidAttack(nextCoordinate)) {
        coord = nextCoordinate;
      } else {
        // Can't continue in this direction.
        // Go back to the original hit and try another direction.
        coord = this.getNeighbourAttack(this.targetHits[0]);

        if (coord) {
          this.direction = this.getDirection(this.targetHits[0], coord);
        }
      }
    }

    // If no target coordinate was available, make a random attack.
    if (!coord) {
      coord = this.getRandomAttack();
    }

    this.attack(gameboard, coord);
    this.attacks.push(coord);

    const successfulAttack = gameboard.successfulAttacks.some((attack) => {
      return attack[0] === coord[0] && attack[1] === coord[1];
    });

    if (successfulAttack) {
      this.hits.push(coord);
      this.targetHits.push(coord);

      const ship = gameboard.board[coord[1]][coord[0]];

      if (ship.destroyed) {
        this.targetHits = [];
        this.direction = null;
      }
    } else if (this.targetHits.length > 1) {
      // We missed while following a direction.
      // Stop continuing in that direction.
      this.direction = null;
    }

    return coord;
  }

  getRandomAttack() {
    let coord = null;
    let found = false;

    while (!found) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);

      const alreadyAttacked = this.attacks.some((attack) => {
        return attack[0] === x && attack[1] === y;
      });

      if (!alreadyAttacked) {
        coord = [x, y];
        found = true;
      }
    }

    return coord;
  }

  getNeighbourAttack(hit) {
    const x = hit[0];
    const y = hit[1];

    const neighbours = [
      [x, y + 1], // down
      [x, y - 1], // up
      [x - 1, y], // left
      [x + 1, y], // right
    ];

    for (const neighbour of neighbours) {
      if (this.isValidAttack(neighbour)) {
        return neighbour;
      }
    }

    return null;
  }

  getNextInDirection(hit, direction) {
    const x = hit[0];
    const y = hit[1];

    if (direction === "down") {
      return [x, y + 1];
    }

    if (direction === "up") {
      return [x, y - 1];
    }

    if (direction === "left") {
      return [x - 1, y];
    }

    if (direction === "right") {
      return [x + 1, y];
    }

    return null;
  }

  getDirection(firstHit, secondHit) {
    const xDifference = secondHit[0] - firstHit[0];
    const yDifference = secondHit[1] - firstHit[1];

    if (xDifference === 1) {
      return "right";
    }

    if (xDifference === -1) {
      return "left";
    }

    if (yDifference === 1) {
      return "down";
    }

    if (yDifference === -1) {
      return "up";
    }

    return null;
  }

  isValidAttack(coordinate) {
    const x = coordinate[0];
    const y = coordinate[1];

    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return false;
    }

    return !this.attacks.some((attack) => {
      return attack[0] === x && attack[1] === y;
    });
  }
}
