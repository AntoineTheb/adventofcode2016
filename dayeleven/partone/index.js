'use strict';
const dc = require('deepcopy');

// Because I'm lazy
const Combinatorics = require('js-combinatorics');

const input = `The first floor contains a strontium generator, a strontium-compatible microchip, a plutonium generator, and a plutonium-compatible microchip.
The second floor contains a thulium generator, a ruthenium generator, a ruthenium-compatible microchip, a curium generator, and a curium-compatible microchip.
The third floor contains a thulium-compatible microchip.
The fourth floor contains nothing relevant.`;

const E = {
  S: 1,
  P: 2,
  T: 3,
  R: 4,
  C: 5
};

const sort = (x, y) => Math.abs(x) > Math.abs(y) ? 1 : -1;
const prevs = [];
String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

function draw(state) {
  console.log(`${state.moves} ==================`);
  const floors = state.floors;
  for (let i = floors.length - 1; i >= 0; --i) {
    let floor = `F${i}:`;
    for (let j = 0; j < floors[i].length; ++j) {
      floor += `${floors[i][j]} , `;
    }
    floor += state.elevator === i ? ' <== E' : '';
    console.log(floor);
  }
}

const isValidCombination = (a, b) =>
  (a + b == 0 || //is generator/chip pair
    a * b > 0); //chip-chip or gen/gen

function getCombinations(floor) {
  let combs = [];
  if (floor.length >= 2) {
    let cmb = Combinatorics.combination(floor, 2);
    let c;
    while (c = cmb.next()) {
      if (isValidCombination(c[0], c[1])) {
        combs.push(c);
      }
    }
  }
  return combs;
}

function isFloorValid(floor) {
  for (let i = 0; i < floor.length; ++i) {
    let valid = floor[i] < 0;
    for (let j = 0; j < floor.length; ++j) {
      if (!valid && floor[j] === (floor[i] * -1)) valid = true;
    }
    if (!valid) return false;
  }
  return true;
}

function removeItem(floor, item) {
  let newFloor = dc(floor);
  for (let k = 0; k < item.length; ++k) {
    newFloor.splice(newFloor.indexOf(item[k]), 1);
  }
  if (floor.length === newFloor.length) {
    throw new Error();
  }
  return newFloor;
}

function getWeight(floor) {
  let weight = 0;
  for (let item of floor) weight += item;
  return weight;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  a = a.sort(sort);
  b = b.sort(sort);
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function hasStateBeenVisited(candidate, history) {
  if (history.length === 0) return false;
  for (let k = 0; k < history.length; ++k) {
    if (getWeight(candidate.floors[0]) === history[k][0] &&
        getWeight(candidate.floors[1]) === history[k][1] &&
        getWeight(candidate.floors[2]) === history[k][2] &&
      getWeight(candidate.floors[3]) === history[k][3])
      return true;

  }
    /*
  if (history.length === 0) return false;
  for (let k = 0; k < history.length; ++k) {
     if (arraysEqual(candidate.floors[0], history[k][0]) &&
        arraysEqual(candidate.floors[1], history[k][1]) &&
        arraysEqual(candidate.floors[2], history[k][2]) &&
        arraysEqual(candidate.floors[3], history[k][3]))
      return true;
  }
  */
  return false;
}

function getValidMoves(state) {
  let items =
    state.floors[state.elevator]
    .map(x => [x])
    .concat(
      getCombinations(state.floors[state.elevator])
    ); //single and pairs
  const states = [];
  for (let item of items) {
    const floor = dc(state.floors[state.elevator]);
    let currentFloor = removeItem(floor, item).sort(sort);
    if (currentFloor.length === floor.length) {
      throw new Error('item not removed');
    }
    if (isFloorValid(currentFloor)) {
      let lowerFloor = state.elevator > 0 &&
        state.floors[state.elevator - 1].length > 0 && //no need to push down to an empty floor
        dc(state.floors[state.elevator - 1]);
      if (lowerFloor) {
        if (lowerFloor.indexOf(item[0]) !== -1) {
          console.log(state.elevator, lowerFloor, floor, item);
          throw new Error('item already present');
        }
        lowerFloor = lowerFloor.concat(item).sort(sort);
        if (isFloorValid(lowerFloor)) {
          let floors = dc(state.floors);
          floors[state.elevator] = currentFloor;

          let elevator = dc(state.elevator) - 1;
          floors[elevator] = lowerFloor;
          const candidate = {
            floors,
            elevator,
            moves: dc(state.moves) + 1,
            prevs: dc(state.prevs),
          };
          if (!hasStateBeenVisited(candidate, candidate.prevs))
            candidate.prevs.push(dc(candidate.floors.map(x => getWeight(x))));
            states.push(candidate);
        }
      }
    }
  }
  items =
    getCombinations(state.floors[state.elevator])
    .concat(state.floors[state.elevator]
      .map(x => [x])
    ); //single and pairs
  for (let item of items) {
    const floor = dc(state.floors[state.elevator]);
    let currentFloor = removeItem(floor, item).sort(sort);
    if (currentFloor.length === floor.length) {
      throw new Error('item not removed');
    }
    if (isFloorValid(currentFloor)) {
      let lowerFloor = state.elevator > 0 &&
        state.floors[state.elevator - 1].length > 0 && //no need to push down to an empty floor
        dc(state.floors[state.elevator - 1]);

      let higherFloor = state.elevator < 3 && dc(state.floors[state.elevator + 1]);
      if (higherFloor) {
        if (higherFloor.indexOf(item[0]) !== -1) {
          console.log(higherFloor, item);
          throw new Error('item already present');
        }
        higherFloor = higherFloor.concat(item).sort(sort);
        if (isFloorValid(higherFloor)) {
          let floors = dc(state.floors);
          floors[state.elevator] = currentFloor;
          let elevator = dc(state.elevator) + 1;
          floors[elevator] = higherFloor;
          const candidate = {
            floors,
            elevator,
            moves: dc(state.moves) + 1,
            prevs: dc(state.prevs),
          };
          if (!hasStateBeenVisited(candidate, candidate.prevs)) {
            candidate.prevs.push(dc(candidate.floors.map(x => getWeight(x))));
            states.push(candidate);
          }
        }
      }
    }
  }
  return states;
}

function isStateFinal(state) {
  if (state.floors[3].length === Object.keys(E).length * 2) return true;
  return false;
}

function move() {
  let solutions = [];
  // Generators are negative
  let floors = [
    [-E.S, E.S, -E.P, E.P].sort(sort),
    [-E.T, -E.R, E.R, -E.C, E.C].sort(sort),
    [E.T].sort(),
    []
  ];
  let elevator = 0;
  let moves = 0;
  let prevs = [];
  let state = { floors, elevator, moves, prevs };
  let q = [];
  q.push(dc(state));


  draw(state);
  while(q.length !== 0) {
    let current = q.shift();
    for (let candidate of getValidMoves(current)) {
      draw(candidate);
      q.push(dc(candidate));
      if (isStateFinal(candidate)) {
        draw(candidate);
        solutions.push(dc(candidate));
      }
    }
  }
}

move();
