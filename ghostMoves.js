import {DIRECTIONS, OBJECT_TYPE} from './setup';

export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePosition = position + dir.movement;
  // Create an Array from the Directions object Keys
  const keys = Object.keys(DIRECTIONS);
  while (
    objectExist(nextMovePosition, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePosition, OBJECT_TYPE.GHOST)
    ) {
    // Get a random Key from the key Array
    const key = keys[Math.floor((Math.random() * keys.length))];
    // Set the next move
    dir = DIRECTIONS[key];
    // Set the next move
    nextMovePosition = position + dir.movement;
  }
  return {nextMovePosition, direction: dir};
}