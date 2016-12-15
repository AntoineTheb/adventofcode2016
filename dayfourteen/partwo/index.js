'use strict';
const md5 = require('md5');
const input = `zpqevtbw`;
// const input = 'abc';

const memo = {};

function getHash(i) {
  const salt = `${input}${i}`;
  let hash;
  if (!memo[salt]) {
    hash = salt;
    for (let j = 0; j <= 2016; ++j)
      hash = md5(hash);
    memo[salt] = hash;
  }
  return memo[salt];
}

// hurray for the most inefficient answer ever !
function keys() {
  let i;
  let max = 1000;
  const potentials = [];
  const hashes = [];
  for (i=0;hashes.length < 64; ++i) {
    let hash = getHash(i);
    const tmatches = hash.match(/(.)\1{2}/);
    if (tmatches) {
      const tmatch = tmatches[0];
      for (let j = i + 1; j <= i + 1000; ++j) {
        let fhash = getHash(j);
        const fmatches = fhash.match(new RegExp(`${tmatch[0]}{5}`), 'g');
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


