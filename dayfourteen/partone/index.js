'use strict';
const md5 = require('md5');
const input = `zpqevtbw`;

// hurray for the most inefficient answer ever !
function keys() {
  let i = 0;
  let max = 1000;
  const potentials = [];
  const hashes = [];
  while (hashes.length < 64) {
    const hash = md5(`${input}${i}`);
    const tmatches = hash.match(/(.)\1{2}/);
    if (tmatches) {
      const tmatch = tmatches[0];
      for (let j = i + 1; j <= i + 1000; ++j) {
        const fhash = md5(`${input}${j}`);
        const fmatches = fhash.match(/(.)\1{4}/);
        if (fmatches) {
          const fmatch = fmatches[0].slice(0, 3);
          if (tmatch === fmatch) {
            console.log(tmatch, fmatches[0], i);
            hashes.push(hash);
          }
        }
      }
    }
    i++;
  }
  console.log(hashes);
  return i - 1;
}
console.log(keys());


