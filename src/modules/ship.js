export class Ship {
  constructor(id, length) {
    this.id = id;
    this.length = length;
    this.hitPoints = length;
    this.destroyed = false;
    this.alreadyPlaced = false;
  }
  hit() {
    if (this.destroyed) {
      return;
    }
    this.hitPoints -= 1;

    if (this.hitPoints === 0) {
      this.destroyed = true;
      return;
    }
  }
}
