'use strict';
const md5 = require('md5');
const dc = require('deepcopy');
const max_y = 3;
const max_x = 3;

const dir = {
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3
}
// up down left right
//
Array.min = function( array ){
  return Math.min.apply( Math, array );
};
function getDoors(path, x, y) {
  let hash = md5(path).substring(0, 4);
  const doors = hash;
  const unlocked = [];
  for (let i = 0; i < 4; ++i) {
    if (/[bcdef]/.test(doors[i])) {
      switch (i) { // directions
        case dir.UP:
          if (y > 0) unlocked.push('U');
          break;
        case dir.DOWN:
          if (y < max_y) unlocked.push('D');
          break;
        case dir.LEFT:
          if (x > 0) unlocked.push('L');
          break;
        case dir.RIGHT:
          if (x < max_x) unlocked.push('R');
          break;
      }
    }
  }
  return unlocked;
}

function goToVault(input) {
  let x = 0;
  let y = 0;
  const paths = [['', x, y]];
  const dist = {};
  let sols = [];
  while (paths.length > 0) {
    let [passcode, x, y] = paths.shift();
    const doors = getDoors(`${input}${passcode}`, x, y);
    console.log(doors, passcode);
    for (let i = 0; i < doors.length; ++i) {
      const door = doors[i];
      let nx = dc(x);
      let ny = dc(y);
      let newpass = dc(passcode);
      switch (door) {
        case 'U': ny--;
          newpass += 'U';
          break;
        case 'D': ny++;
          newpass += 'D';
          break;
        case 'L': nx--;
          newpass += 'L';
          break;
        case 'R': nx++;
          newpass += 'R';
          break;
        default: throw new Error(`unknown door ${door}`);
      }
      if (x === 3 && y === 3) sols.push(newpass);
      else {
        if (!dist[newpass]) {
          dist[newpass] = newpass.length;
          paths.push(dc([newpass, nx, ny]));
        }
      }
    }
  }
  let min = Number.MAX_SAFE_INTEGER;
  sols = sols.map(x => x.length);
  return Array.min(sols);
}

console.log(goToVault('ihgpwlah'));

