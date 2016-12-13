'use strict';

const dc = require('deepcopy');
// Because I'm lazy
const Combinatorics = require('js-combinatorics');
const _ = require('lodash');

const E = {
  S: 1,
  P: 2,
  T: 3,
  R: 4,
  C: 5
};

const sort = (x, y) => Math.abs(x) > Math.abs(y) ? 1 : -1;

// http://stackoverflow.com/questions/10892322/javascript-hashtable-use-object-key/
function HashTable() {
    this.hashes = {};
}

HashTable.prototype = {
    constructor: HashTable,

    put: function( key, value ) {
        this.hashes[ JSON.stringify( key ) ] = value;
    },

    get: function( key ) {
        return this.hashes[ JSON.stringify( key ) ];
    }
};

const isFloorValid = (floor) => {
  for (let i = 0; i < floor.length; ++i) {
    let valid = floor[i] < 0;
    for (let j = 0; j < floor.length; ++j) {
      if (!valid && floor[j] === (floor[i] * -1)) valid = true;
    }
    if (!valid) return false;
  }
  return true;
}

const isValidCombination = (a, b) =>
  (a + b == 0 || //is generator/chip pair
    a * b > 0); //chip-chip or gen/gen

const getCombinations = (floor, nb) => {
  let combs = [];
  if (floor.length >= nb) {
    let cmb = Combinatorics.combination(floor, nb);
    let c;
    while (c = cmb.next()) {
      if (isValidCombination(c[0], c[1])) {
        combs.push(c);
      }
    }
  }
  return combs;
}

const initial = [0, [
    [-E.S, E.S, -E.P, E.P].sort(sort),
    [-E.T, -E.R, E.R, -E.C, E.C].sort(sort),
    [E.T].sort(),
    []
]];

const frontier = [];

frontier.push(dc(initial));

let cost = new HashTable();
cost.put(initial, 0);

while (frontier.length > 0) {
  const current = frontier.pop();
  const [floor, floors] = current;

  if (floor === 3 && floors[3].length === Object.keys(E).length * 2)
    break; //woop
  const directions = _.filter([-1, 1], x =>
    x + floor >= 0 && x + floor <= 3);
  const moves = getCombinations(floors[floor], 2).concat(getCombinations(floors[floor], 1));
  for (let move of moves) {
    for (let direction of directions) {
      const newFloors = dc(floors);
      newFloors[floor] = _.filter(floors[floor], x =>
        floors[floor].indexOf(move[0]) > 0 &&
        floors[floor].indexOf(move[move.length -1]) > 0);

      if (!isFloorValid(newFloors[floor]) ||
        !isFloorValid(newFloors[floor + direction]))
        continue;

      const next = [floor + direction, newFloors];
      const newCost = cost.get(current) + 1;

      if (!cost.get(next) || newCost < cost.get(next)) {
        cost.put({next: newCost});
        frontier.push(next);
        console.log(next);
      }
    }
  }
}

console.log(cost);
