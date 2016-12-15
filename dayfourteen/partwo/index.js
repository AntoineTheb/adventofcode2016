'use strict';
const md5 = require('md5');
const input = `abc`;

// hurray for the most inefficient answer ever !
function keys() {
  let i;
  let max = 1000;
  const memo = {};
  const potentials = [];
  const hashes = [];
  for (i=0;hashes.length < 64; ++i) {
    let hash = `${input}${i}`;
    for (let j = 0; j <= 2016; ++j)
      memo[hash] = hash = memo[hash] || md5(hash);
    const tmatches = hash.match(/(.)\1{2}/);
    if (tmatches) {
      // console.log(hash, 'is a candidate');
      const tmatch = tmatches[0];
      for (let j = i + 1; j <= i + 1000; ++j) {
        const fhash = md5(`${input}${j}`);
        const fmatches = fhash.match(`${tmatch[0]}{5}`, 'g');
        if (fmatches) {
          const fmatch = fmatches[0].slice(0, 3);
          if (tmatch === fmatch) {
            console.log(hash, fhash, i, j);
            hashes.push(hash);
          }
        }
      }
    }
  }
  console.log(hashes);
  return i - 1;
}
console.log(keys());


