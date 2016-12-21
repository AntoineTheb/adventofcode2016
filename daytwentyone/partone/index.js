'use strict';

const steps = `rotate right 3 steps
swap letter b with letter a
move position 3 to position 4
swap position 0 with position 7
swap letter f with letter h
rotate based on position of letter f
rotate based on position of letter b
swap position 3 with position 0
swap position 6 with position 1
move position 4 to position 0
rotate based on position of letter d
swap letter d with letter h
reverse positions 5 through 6
rotate based on position of letter h
reverse positions 4 through 5
move position 3 to position 6
rotate based on position of letter e
rotate based on position of letter c
rotate right 2 steps
reverse positions 5 through 6
rotate right 3 steps
rotate based on position of letter b
rotate right 5 steps
swap position 5 with position 6
move position 6 to position 4
rotate left 0 steps
swap position 3 with position 5
move position 4 to position 7
reverse positions 0 through 7
rotate left 4 steps
rotate based on position of letter d
rotate left 3 steps
swap position 0 with position 7
rotate based on position of letter e
swap letter e with letter a
rotate based on position of letter c
swap position 3 with position 2
rotate based on position of letter d
reverse positions 2 through 4
rotate based on position of letter g
move position 3 to position 0
move position 3 to position 5
swap letter b with letter d
reverse positions 1 through 5
reverse positions 0 through 1
rotate based on position of letter a
reverse positions 2 through 5
swap position 1 with position 6
swap letter f with letter e
swap position 5 with position 1
rotate based on position of letter a
move position 1 to position 6
swap letter e with letter d
reverse positions 4 through 7
swap position 7 with position 5
swap letter c with letter g
swap letter e with letter g
rotate left 4 steps
swap letter c with letter a
rotate left 0 steps
swap position 0 with position 1
reverse positions 1 through 4
rotate based on position of letter d
swap position 4 with position 2
rotate right 0 steps
swap position 1 with position 0
swap letter c with letter a
swap position 7 with position 3
swap letter a with letter f
reverse positions 3 through 7
rotate right 1 step
swap letter h with letter c
move position 1 to position 3
swap position 4 with position 2
rotate based on position of letter b
reverse positions 5 through 6
move position 5 to position 3
swap letter b with letter g
rotate right 6 steps
reverse positions 6 through 7
swap position 2 with position 5
rotate based on position of letter e
swap position 1 with position 7
swap position 1 with position 5
reverse positions 2 through 7
reverse positions 5 through 7
rotate left 3 steps
rotate based on position of letter b
rotate left 3 steps
swap letter e with letter c
rotate based on position of letter a
swap letter f with letter a
swap position 0 with position 6
swap position 4 with position 7
reverse positions 0 through 5
reverse positions 3 through 5
swap letter d with letter e
move position 0 to position 7
move position 1 to position 3
reverse positions 4 through 7`.split('\n').map(x => x.split(' '));

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

const swapPosition = ((str, x, y) => {
  str = str.split('');
  const temp = str[x];
  str[x] = str[y];
  str[y] = temp;

  return str.join('');
});

const swapLetter = ((str, x, y) => {
  const ix = str.indexOf(x);
  const iy = str.indexOf(y);
  return swapPosition(str, ix, iy);
});

const rotateLeft = ((str, x, offset) => {
  let rotated = '';
  for(let i = 0; i < str.length; ++i) {
    rotated += str[(i + x).mod(str.length)];
  }
  return rotated;
});

const rotateRight = ((str, x) => {
  let rotated = '';
  for(let i = 0; i < str.length; ++i) {
    rotated += str[(i - x).mod(str.length)];
  }
  return rotated;
 });
const rotateBased = ((str, x) => {
  let ix = str.indexOf(x) + 1;
  if (ix > 4) ix++;
  return rotateRight(str, ix);
});

const reverse = ((str, x, y) => {
  str = str.split('');
  const reverse = str.slice(x, y + 1).reverse();
  return str.slice(0, x).concat(reverse).concat(str.slice(y + 1, str.length)).join('');
});

const move = ((str, x, y) => {
  str = str.split('');
  const char = str[x];
  str.splice(x, 1);
  str.splice(y, 0, char);
  return str.join('');
});

function scramble(pass, steps) {
  for (let i = 0; i < steps.length; ++i) {
    const step = steps[i];
    switch(step[0]) {
      case 'swap':
        if (step[1] === 'position') {
          pass = swapPosition(pass, +(step[2]), +(step[5]));
        }
        else if (step[1] === 'letter') {
          pass = swapLetter(pass, step[2], step[5]);
        } else throw new Error(`unknown step ${steps[i]}`);
        break;
      case 'rotate':
        if (step[1] === 'left') {
          pass = rotateLeft(pass, +(step[2]));
        } else if (step[1] === 'right') {
          pass = rotateRight(pass, +(step[2]));
        } else if (step[1] === 'based') {
          pass = rotateBased(pass, step[6]);
        } else throw new Error(`unknown step ${steps[i]}`);
        break;
      case 'reverse':
        pass = reverse(pass, +(step[2]), +(step[4]));
        break;
      case 'move':
        pass = move(pass, step[2], step[5]);
        break;
      default:
        throw new Error(`unknown step ${steps[i]}`);
    }
    console.log(step, pass);
  }
  return pass;
}

console.log(scramble('abcdefgh', steps));
