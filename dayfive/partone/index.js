'use strict';
const md5 = require('js-md5');
const input = 'uqwqemis';

function findPassword() {
  let index = 0;
  let password = '';

  while(password.length < 8) {
    const hash = md5(`${input}${index}`);
    if (hash.slice(0,5) === '00000') {
      password += hash[5];
      console.log(hash, index, password);
    }
    index++;
  }

  console.log(password);
}

findPassword();
