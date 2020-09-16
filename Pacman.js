import {OBJECT_TYPE, DIRECTIONS} from './setup';

export default class Pacman {
  constructor(speed, startPosition) {
    this.position = startPosition;
    this.speed = speed;
    this.direction = null;
    this.timer = 0;
    this.powerPill = false;
    this.rotation = true;
  }

  shouldMove() {
    if (!this.direction) return false;
    if (this.timer === this.speed) {
      this.timer = 0;
      return true;
    }
    this.timer++;
  }

  getNextMove(objectExist) {
    let nextMovePosition = this.position + this.direction.movement;
    if (
      objectExist(nextMovePosition, OBJECT_TYPE.WALL) ||
      objectExist(nextMovePosition, OBJECT_TYPE.GHOSTLAIR)
    ) {
      nextMovePosition = this.position;
    }

    return {nextMovePosition, direction: this.direction};
  }

  makeMove() {
    const classesToRemove = [OBJECT_TYPE.PACMAN];
    const classesToAdd = [OBJECT_TYPE.PACMAN];

    return {classesToRemove, classesToAdd};
  }

  setNewPosition(nextMovePosition) {
    this.position = nextMovePosition;
  }

  handleKeyInput(e, objectExist) {
    let direction;
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      direction = DIRECTIONS[e.key];
    } else {
      return;
    }

    const nextMovePosition = this.position + direction.movement;
    if (
      objectExist(nextMovePosition, OBJECT_TYPE.WALL) ||
      objectExist(nextMovePosition, OBJECT_TYPE.GHOSTLAIR)
    ) return;
    this.direction = direction;

  }
}