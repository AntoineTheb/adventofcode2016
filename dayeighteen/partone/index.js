'use strict';

const count = (i) => i.filter(x => !x).length;

const cond1 = (i, c) => i[c-1] && i[c] && !i[c+1];
const cond2 = (i, c) => !i[c-1] && i[c] && i[c+1];
const cond3 = (i, c) => i[c-1] && !i[c] && !i[c+1];
const cond4 = (i, c) => !i[c-1] && !i[c] && i[c+1];

const isTrap = (i, c) => cond1(i, c) ||
  cond2(i, c) ||
  cond3(i, c) ||
  cond4(i, c);


const rows = 400000;

let input =
  '^..^^.^^^..^^.^...^^^^^....^.^..^^^.^.^.^^...^.^.^.^.^^.....^.^^.^.^.^.^.^.^^..^^^^^...^.....^....^.'
  .split('').map(x => x === '^')
;
let buffer = [];
let safes = count(input);

for (let row = 1; row < rows; ++row) {
  for (let col = 0; col < input.length; ++col) {
    buffer.push(isTrap(input, col));
  }
  safes += count(buffer);
  input = buffer;
  buffer = [];
}

console.log(safes);
