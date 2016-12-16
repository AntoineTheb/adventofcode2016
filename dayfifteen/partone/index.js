'use strict';

const input = `Disc #1 has 17 positions; at time=0, it is at position 5.
Disc #2 has 19 positions; at time=0, it is at position 8.
Disc #3 has 7 positions; at time=0, it is at position 1.
Disc #4 has 13 positions; at time=0, it is at position 7.
Disc #5 has 5 positions; at time=0, it is at position 1.
Disc #6 has 3 positions; at time=0, it is at position 0.`;

const finput =
[
  { length: 17, pos: 5 },
  { length: 19, pos: 8 },
  { length: 7, pos: 1 },
  { length: 13, pos: 7 },
  { length: 5, pos: 1 },
  { length: 3, pos: 0 },
];

function pipedream() {
  let i = 0;
  while (!(finput.every((x,diff) => (x.pos + i + diff + 1 ) % x.length === 0))) ++i;
  return i;
}

console.log(pipedream());
  // need to wait min 11 seconds for disc 1
  //
