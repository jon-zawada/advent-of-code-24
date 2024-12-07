const formatData = require('./util');

const inputFile = process.argv[2] || 'input.txt';
const { nums1, nums2 } = formatData(inputFile);

const store = {};
let result = 0;

for (let num of nums2) {
  store[num] ? store[num]++ : store[num] = 1;
}

for (let num of nums1) {
  if (store[num]) {
    result += store[num] * num;
  }
}

console.log(result);

//25574739
