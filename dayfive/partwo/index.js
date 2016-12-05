'use strict';
const md5 = require('js-md5');
const input = 'uqwqemis';

function findPassword() {
  let index = 0;
  let password = [];

  while(password.length < 8) {
    const hash = md5(`${input}${index}`);
    if (hash.slice(0,5) === '00000') {
      console.log(parseInt(hash[5]));
      let i;
      if ((i = parseInt(hash[5])) < 8 && !password[i]) {
        password[i] = hash[6];
        console.log(hash, index, password);
      }
    }
    index++;
  }

  console.log(password);
}

findPassword();
