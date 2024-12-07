const formatData = require('./util');

const inputFile = process.argv[2] || 'input.txt';
const { nums1, nums2 } = formatData(inputFile);

let result = 0;

nums1.sort((a, b) => a - b);
nums2.sort((a, b) => a - b);

for (let i = 0; i < nums1.length; i++) {
  result += Math.abs(nums1[i] - nums2[i]);
}

console.log(result);

//1603498