const parseData = require('./util');

const data = parseData(process.argv[2]);

let isSafe = 0;

for (let arr of data) {
  let increasing = true;
  let decreasing = true;
  let safe = true;
  for (let i = 0; i < arr.length; i++) {
    if (!increasing && !decreasing) {
      safe = false;
      continue;
    }
    if (i < arr.length - 1 && (arr[i] > arr[i + 1])) {
      increasing = false;
    }
    if (i < arr.length - 1 && (arr[i] < arr[i + 1])) {
      decreasing = false;
    }

    const diff = Math.abs(arr[i] - arr[i + 1])
    if (diff > 3 || diff < 1) {
      safe = false;
      continue;
    }
  }
  if (safe) isSafe++;
}

console.log(isSafe);
