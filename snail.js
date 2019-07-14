/* Snail
1. Make a function to peek a next move 'peek()`
2. Peek next move and record every move from the given array
3. ;)
 */

const RIGHT = [0, 1];
const DOWN = [1, 0];
const LEFT = [0, -1];
const UP = [-1, 0];

function snail(arr) {
  if (arr[0].length === 0) return [];
  if (arr[0].length === 1) return arr[0];

  const R = arr.length;
  const C = arr[0].length;
  let path = [[0, 0]];
  let result = [arr[0][0]];

  let direction = RIGHT;
  for (let i = 0; i < R * C - 1; i++) {
    const nextMove = peek(R, C, path, path[i], direction);
    switch (nextMove) {
      case RIGHT:
        path.push([path[i][0] + RIGHT[0], path[i][1] + RIGHT[1]]);
        result.push(arr[path.slice(-1)[0][0]][path.slice(-1)[0][1]]);
        direction = RIGHT;
        break;
      case DOWN:
        path.push([path[i][0] + DOWN[0], path[i][1] + DOWN[1]]);
        result.push(arr[path.slice(-1)[0][0]][path.slice(-1)[0][1]]);
        direction = DOWN;
        break;
      case LEFT:
        path.push([path[i][0] + LEFT[0], path[i][1] + LEFT[1]]);
        result.push(arr[path.slice(-1)[0][0]][path.slice(-1)[0][1]]);
        direction = LEFT;
        break;
      case UP:
        path.push([path[i][0] + UP[0], path[i][1] + UP[1]]);
        result.push(arr[path.slice(-1)[0][0]][path.slice(-1)[0][1]]);
        direction = UP;
        break;
      default:
        break;
    }
  }

  return result;
}

function peek(R, C, path, cur, dir) {
  const tryToMove = [cur[0] + dir[0], cur[1] + dir[1]];

  let newDir = dir;
  if (
    tryToMove[0] >= R ||
    tryToMove[1] >= C ||
    tryToMove[0] < 0 ||
    tryToMove[1] < 0
  ) {
    if (dir === RIGHT) newDir = DOWN;
    if (dir === DOWN) newDir = LEFT;
    if (dir === LEFT) newDir = UP;
    if (dir === UP) newDir = RIGHT;
  }

  path.forEach(p => {
    if (p[0] === tryToMove[0] && p[1] === tryToMove[1]) {
      if (dir === RIGHT) newDir = DOWN;
      if (dir === DOWN) newDir = LEFT;
      if (dir === LEFT) newDir = UP;
      if (dir === UP) newDir = RIGHT;
    }
  });

  return newDir;
}

module.exports = { snail };
