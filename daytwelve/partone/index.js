'use strict';



const input = `cpy 1 a
cpy 1 b
cpy 26 d
jnz c 2
jnz 1 5
cpy 7 c
inc d
dec c
jnz c -2
cpy a c
inc a
dec b
jnz b -2
cpy c b
dec d
jnz d -6
cpy 19 c
cpy 11 d
inc a
dec d
jnz d -2
dec c
jnz c -5`;

function assembunny() {
  const regs = { a: 0, b: 0, c:1, d:0 };
  const instrs = {
    cpy: (x,y) =>  !!(regs[y] = regs[x] || +x),
    inc: (x) => !!(regs[x]++),
    dec: (x) => !!(regs[x]--),
    jnz: (x,y) => !regs[x] || +x === 0 ? 1 : +y,
  };
  const commands = input.split('\n');
  for (let i = 0; i < commands.length;) {
    const [cm,x,y] = commands[i].split(' ');
    i += instrs[cm](x,y);
    console.log(regs, cm, x, y, i);
  }
}

assembunny();
