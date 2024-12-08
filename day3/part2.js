const fs = require('fs');

const data = fs.readFileSync(process.argv[2], 'utf8');
console.log(data);

const regex = /(mul\(\d+,\d+\)|do\(\)|don't\(\))/g;

const muls = data.match(regex);
console.log(muls);
let result = 0;

let doWork = true;
for (let mul of muls) {
  if (mul === "don't()") {
    doWork = false;
    continue;
  } else if (mul === 'do()') {
    doWork = true;
    continue;
  }

  if (doWork) {
    const regex2 = /mul\((\d+),(\d+)\)/;
    const match = mul.match(regex2);
    const num1 = parseInt(match[1], 10);
    const num2 = parseInt(match[2], 10);
    result += num1 * num2;
  }
}

console.log(result);