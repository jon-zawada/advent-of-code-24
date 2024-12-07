const fs = require('fs');

const formatData = (file) => {
  const nums1 = [];
  const nums2 = [];

  const data = fs.readFileSync(file, "utf8");
  const lines = data.split('\n');
  const arrOfArrOfNums = lines.map((line) => line.split("   ").map(str => Number(str)));

  arrOfArrOfNums.forEach((tuple) => {
    nums1.push(tuple[0]);
    nums2.push(tuple[1]);
  })

  return { nums1, nums2 }
}

module.exports = formatData;