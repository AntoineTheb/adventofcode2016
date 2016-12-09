'use strict';


const input = `rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 3
rect 1x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 3
rect 1x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 3
rect 1x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 3
rect 2x1
rotate row y=0 by 2
rect 1x2
rotate row y=1 by 5
rotate row y=0 by 3
rect 1x2
rotate column x=30 by 1
rotate column x=25 by 1
rotate column x=10 by 1
rotate row y=1 by 5
rotate row y=0 by 2
rect 1x2
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate row y=2 by 18
rotate row y=0 by 5
rotate column x=0 by 1
rect 3x1
rotate row y=2 by 12
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate column x=20 by 1
rotate row y=2 by 5
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate row y=2 by 15
rotate row y=0 by 15
rotate column x=10 by 1
rotate column x=5 by 1
rotate column x=0 by 1
rect 14x1
rotate column x=37 by 1
rotate column x=23 by 1
rotate column x=7 by 2
rotate row y=3 by 20
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate row y=3 by 5
rotate row y=2 by 2
rotate row y=1 by 4
rotate row y=0 by 4
rect 1x4
rotate column x=35 by 3
rotate column x=18 by 3
rotate column x=13 by 3
rotate row y=3 by 5
rotate row y=2 by 3
rotate row y=1 by 1
rotate row y=0 by 1
rect 1x5
rotate row y=4 by 20
rotate row y=3 by 10
rotate row y=2 by 13
rotate row y=0 by 10
rotate column x=5 by 1
rotate column x=3 by 3
rotate column x=2 by 1
rotate column x=1 by 1
rotate column x=0 by 1
rect 9x1
rotate row y=4 by 10
rotate row y=3 by 10
rotate row y=1 by 10
rotate row y=0 by 10
rotate column x=7 by 2
rotate column x=5 by 1
rotate column x=2 by 1
rotate column x=1 by 1
rotate column x=0 by 1
rect 9x1
rotate row y=4 by 20
rotate row y=3 by 12
rotate row y=1 by 15
rotate row y=0 by 10
rotate column x=8 by 2
rotate column x=7 by 1
rotate column x=6 by 2
rotate column x=5 by 1
rotate column x=3 by 1
rotate column x=2 by 1
rotate column x=1 by 1
rotate column x=0 by 1
rect 9x1
rotate column x=46 by 2
rotate column x=43 by 2
rotate column x=24 by 2
rotate column x=14 by 3
rotate row y=5 by 15
rotate row y=4 by 10
rotate row y=3 by 3
rotate row y=2 by 37
rotate row y=1 by 10
rotate row y=0 by 5
rotate column x=0 by 3
rect 3x3
rotate row y=5 by 15
rotate row y=3 by 10
rotate row y=2 by 10
rotate row y=0 by 10
rotate column x=7 by 3
rotate column x=6 by 3
rotate column x=5 by 1
rotate column x=3 by 1
rotate column x=2 by 1
rotate column x=1 by 1
rotate column x=0 by 1
rect 9x1
rotate column x=19 by 1
rotate column x=10 by 3
rotate column x=5 by 4
rotate row y=5 by 5
rotate row y=4 by 5
rotate row y=3 by 40
rotate row y=2 by 35
rotate row y=1 by 15
rotate row y=0 by 30
rotate column x=48 by 4
rotate column x=47 by 3
rotate column x=46 by 3
rotate column x=45 by 1
rotate column x=43 by 1
rotate column x=42 by 5
rotate column x=41 by 5
rotate column x=40 by 1
rotate column x=33 by 2
rotate column x=32 by 3
rotate column x=31 by 2
rotate column x=28 by 1
rotate column x=27 by 5
rotate column x=26 by 5
rotate column x=25 by 1
rotate column x=23 by 5
rotate column x=22 by 5
rotate column x=21 by 5
rotate column x=18 by 5
rotate column x=17 by 5
rotate column x=16 by 5
rotate column x=13 by 5
rotate column x=12 by 5
rotate column x=11 by 5
rotate column x=3 by 1
rotate column x=2 by 5
rotate column x=1 by 5
rotate column x=0 by 1`;

const max_x = 50;
const max_y = 6;

function draw(screen, x, y) {
  for (let i = 0; i < y; ++i) {
    for (let j = 0; j < x; ++j) {
      screen[i][j] = true;
    }
  }
  return screen;
}

function shiftColumn(screen, x, y) {
  const circ = [];
  for (let i = 0; i < max_y; ++i) {
    circ.push(screen[i][x]);
  }

  for(let i = 0; i < max_y; ++i) {
    screen[(i + y) % max_y][x] = circ[i];
  }
  return screen;
}

function shiftRow(screen, x, y) {
  const circ = [];
  for (let i = 0; i < max_x; i++) {
    circ.push(screen[y][i]);
  }

  for(let i = 0; i < max_x; i++) {
    screen[y][(i + x) % max_x] = circ[i];
  }
  return screen;
}

function display(screen, x, y) {
  let lit = 0;
  for (let i = 0; i < y; ++i) {
    let line = '';
    for (let j = 0; j < x; ++j) {
      let char;
      if (screen[i][j]) {
        char = '#';
        lit++;
      } else char = '.';
      line += char;
    }
    console.log(line, lit);
  }
}

function screen() {
  let screen = [];
  for (let i = 0; i < max_y; ++i) {
    screen.push([]);
    for (let j = 0; j < max_x; ++j) {
      screen[i].push(false);
    }
  }

  const commands = input.split('\n');
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i].replace(/rotate /, '').split(/ /);
    console.log(command);
    switch(command[0]) {
      case 'rect':
        const [dx, dy] = command[1].split('x');
        screen = draw(screen, dx, dy);
        break;
      case 'row':
        const ry = parseInt(command[1].split('=')[1]);
        const rx = parseInt(command[3]);
        screen = shiftRow(screen, rx, ry);
        break;
      case 'column':
        const cx = parseInt(command[1].split('=')[1]);
        const cy = parseInt(command[3]);
        screen = shiftColumn(screen, cx, cy);
        break;
      default: throw new Error('NOT IMPLEMENTED');
    }
    display(screen, max_x, max_y);
  }
}

screen();
