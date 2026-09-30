export class Ship {
  constructor(length) {
    this.length = length;
    this.hitPoints = length;
    this.destroyed = false;
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
