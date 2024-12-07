const fs = require('fs');

fs.readFile('./input.txt', "utf8", (err, data) => {
  let result = 0;
  const nums1 = [];
  const nums2 = [];
  const lines = data.split('\n');

  const arrOfArrOfNums = lines.map((line) => line.split("   ").map(str => Number(str)));

  arrOfArrOfNums.forEach((tuple) => {
    console.log(tuple)
    nums1.push(tuple[0]);
    nums2.push(tuple[1]);
  })

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  for (let i = 0; i < nums1.length; i++) {
    result += Math.abs(nums1[i] - nums2[i]);
  }

  console.log(result);
});   