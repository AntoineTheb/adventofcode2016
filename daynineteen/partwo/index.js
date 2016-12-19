'use strict';
const _ = require('lodash');
const input = 3004953;
// const input = 5;
const pow = (x) => Math.pow(3, x.toString(3).length - 1);

const numberphile = (x) =>
    pow(x) === x  ? x :
    pow(x) >= x / 2 ? x - pow(x) :
    pow(x) + (2 * (x - 2 * pow(x)));

console.log(numberphile(input));
