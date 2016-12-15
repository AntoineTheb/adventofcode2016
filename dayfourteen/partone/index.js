'use strict';
const md5 = require('md5');
const input = `zpqevtbw`;


function keys() {
  let i = 0;
  let verif = 1000;
  const hashes = [];
  while (i < verif) {
    for(let j = 0; j < hashes.length; ++j) {
      if (hashes[j][3] === false &&
        hashes[j][2] + 1000 < i) {
          hashes.splice(j, 1);
      }
    }
    const hash = md5(`${input}${i}`);
    const tmatches = hash.match(/(.)\1{2}/);
    const fmatches = hash.match(/(.)\1{4}/);
    if (fmatches) {
      for (let fmatch of fmatches) {
        for (let thash of hashes) {
          if (fmatch.slice(0, 3) === thash[1]) {
            thash[3] = true;
          }
        }
      }
    }
    if (tmatches && hashes.length < 64) {
      const match = tmatches[0];
      hashes.push([hash, match, i, false]);
      verif += i + 1000;
    }
    ++i;
  }
  console.log(hashes);
}
keys();


