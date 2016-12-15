'use strict';
const dc = require('deepcopy');
const input = 1352;
const final = [31,39];
const max_x = 50;
const max_y = 50;
const maze = [];

const formula = (x, y, z) => (x*x + 3*x + 2*x*y + y + y*y + z);
const toBin = (x) => x.toString(2);
const evenBits = (x) =>
  x.split('').filter(y => +y === 1).length % 2 === 0;

const f = (x, y, z) => evenBits(toBin(formula(x, y, z)));

function draw() {
  for (let i = 0; i < max_y; ++i) {
    let line = '';
    for (let j = 0; j < max_x; ++j) {
      if (i === 39 && j === 31) line += 'x';
      else line += maze[i][j] === true ? '#' : maze[i][j] === false ? '.' : maze[i][j];
    }
    console.log(line);
  }
}

function build() {
  for (let i = 0; i < max_x; ++i) {
    maze.push([]);
    for (let j = 0; j < max_y; ++j) {
      maze[i][j] = f(j, i, input);
    }
  }
  maze[1][1] = 0;
}

function find() {
  build();
  draw();

  let l = 0;
  while(l < 50) {
    l++;
    for (let x = 0; x < max_x; ++x) {
      for (let y = 0; y < max_y; ++y) {
        if (maze[x][y] !== l - 1) continue;

        if (y > 0 && maze[x][y - 1] === true)
          maze[x][y - 1] = l;
        if (y < max_y && maze[x][y + 1] === true)
          maze[x][y + 1] = l;
        if (x > 0 && maze[x - 1][y] === true)
          maze[x - 1][y] = l;
        if (x < max_x && maze[x + 1][y] === true)
          maze[x + 1][y] = l;
      }
    }
  }
}
find();
draw();
let sum = 0;
maze.forEach(x => {
  sum += x.filter(y => typeof y === 'number' && y <= 50).length;
});
console.log(sum);
