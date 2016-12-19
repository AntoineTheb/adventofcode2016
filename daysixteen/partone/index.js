'use strict';

/*
const input = '00111101111101000';
const length = 272;
*/
/*
const input = ``;
const length = 12;
*/

function dragonCurve(content) {
  let curve = content;
  curve = content
    .split('')
    .reverse()
  for (let i = 0; i < curve.length; ++i) {
    curve[i] = curve[i] ==='1' ? '0' : '1';
  }
  curve = curve.join('');
  curve = `${content}0${curve}`;
  return curve;
}

function checksum(disk) {
  let check = '';
  let i = 0;
  while (i <= disk.length) {
    const pair = disk.substring(i, i + 2);
    switch (pair) {
      case '00':
      case '11':
        check += '1';
        break;
      case '01':
      case '10':
        check += '0';
        break;
    }
    i += 2;
  }
  return check;
}

function hackerzpt2(input, length) {
  let disk = input;
  while (disk.length < length) {
    disk = dragonCurve(disk);
  }
  disk = disk.substring(0, length);
  do {
    disk = checksum(disk);
  } while (disk.length % 2 === 0);
  return disk;
}

console.log(hackerzpt2('00111101111101000',35651584));
