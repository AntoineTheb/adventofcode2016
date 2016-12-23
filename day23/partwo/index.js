'use strict';

let input = `cpy a b
dec b
cpy a d
cpy 0 a
mul b d a
cpy 0 c
cpy 0 c
cpy 0 c
cpy 0 c
cpy 0 d
dec b
cpy b c
cpy c d
dec d
inc c
jnz d -2
tgl c
cpy -16 c
jnz 1 c
cpy 89 c
jnz 84 d
inc a
inc d
jnz d -2
inc c
jnz c -5`;

let commands = input.split('\n');

function assembunny() {
  const regs = { a: 12, b: 0, c:0, d:0 };
  const instrs = {
    cpy: (x,y) =>  {regs[y] = regs[x] || +x; return 1;},
    inc: (x) => { regs[x]++; return 1;},
    dec: (x) => { regs[x]--; return 1;},
    jnz: (x,y) => regs[x] === 0 || +x === 0 ? 1 : regs[y] || +y,
    mul: (x, y, z) => { regs[z] = regs[x] * regs[y]; return 1; },
    tgl: (i, j, k, l) => {
      i = regs[i] + l || i + l;
      if (i < commands.length) {
        let [cm,x,y] = commands[i].split(' ');
        switch (cm) {
          case 'inc':
            cm = 'dec';
            break;
          case 'dec':
          case 'tgl':
            cm = 'inc'
            break;
          case 'jnz':
            cm = 'cpy';
            break;
          case 'cpy':
            cm = 'jnz';
            break;
        }
        commands[i] = [cm, x, y].join(' ');
      }
      return 1;
    },
  };
  for (let i = 0; i < commands.length;) {
    const [cm,x,y,z] = commands[i].split(' ');
    i += instrs[cm](x,y,z,i);
  }
  return regs;
}

console.log(assembunny());
