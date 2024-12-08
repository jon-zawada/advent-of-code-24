const fs = require('fs');

const data = fs.readFileSync(process.argv[2], 'utf8');
console.log(data);

const regex = /mul\(\d+,\d+\)/g;

const muls = data.match(regex);

let result = 0;

for (let mul of muls) {
  const regex2 = /mul\((\d+),(\d+)\)/;
  const match = mul.match(regex2);
  const num1 = parseInt(match[1], 10);
  const num2 = parseInt(match[2], 10);
  result += num1 * num2;
}

console.log(result);