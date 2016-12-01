'use strict';

const input = 'R3, R1, R4, L4, R3, R1, R1, L3, L5, L5, L3, R1, R4, L2, L1, R3, L3, R2, R1, R1, L5, L2, L1, R2, L4, R1, L2, L4, R2, R2, L2, L4, L3, R1, R4, R3, L1, R1, L5, R4, L2, R185, L2, R4, R49, L3, L4, R5, R1, R1, L1, L1, R2, L1, L4, R4, R5, R4, L3, L5, R1, R71, L1, R1, R186, L5, L2, R5, R4, R1, L5, L2, R3, R2, R5, R5, R4, R1, R4, R2, L1, R4, L1, L4, L5, L4, R4, R5, R1, L2, L4, L1, L5, L3, L5, R2, L5, R4, L4, R3, R3, R1, R4, L1, L2, R2, L1, R4, R2, R2, R5, R2, R5, L1, R1, L4, R5, R4, R2, R4, L5, R3, R2, R5, R3, L3, L5, L4, L3, L2, L2, R3, R2, L1, L1, L5, R1, L3, R3, R4, R5, L3, L5, R1, L3, L5, L5, L2, R1, L3, L1, L3, R4, L1, R3, L2, L2, R3, R3, R4, R4, R1, L4, R1, L5';
let movements = [];
const CARDINALS = {
  W: 0,
  N: 1,
  E: 2,
  S: 3,
};
let x = 0;
let y = 0;

let currentDirection = CARDINALS.N;

let map = {};

function fetchPath() {
  movements = input.split(', ');
}

function mod(n, m) {
        return ((n % m) + m) % m;
}

function findEasterFactory(){

  for(let i = 0; i < movements.length; ++i){
    const move = movements[i];
    const direction = move.slice(0, 1);
    const distance = parseInt(move.slice(1));

    if (direction === 'L') {
      currentDirection = mod(--currentDirection, 4);
    } else {
      currentDirection = mod(++currentDirection, 4);
    }
    for(let j = 0; j < distance; ++j) {
      switch(currentDirection) {
        case CARDINALS.N: ++y;
          break;
        case CARDINALS.S: --y;
          break;
        case CARDINALS.W: --x;
          break;
        case CARDINALS.E: ++x;
          break;
        default:
          console.log('ERROR');
          return;
      }
      const cords = `${x},${y}`;
      if (map[cords] === true) {
        return;
      }
      else map[cords] = true;
    }
  }
}

fetchPath();
findEasterFactory();
const result = Math.sqrt(x * x) + Math.sqrt(y * y);
console.log(result);
