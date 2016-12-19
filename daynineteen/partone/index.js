'use strict';
const _ = require('lodash');
const input = 3004953;
// const input = 5;

const numberphile = (x) =>
  parseInt((x).toString(2).slice(1) + (x).toString(2).slice(0, 1), 2);

console.log(numberphile(input));
