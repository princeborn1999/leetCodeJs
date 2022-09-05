/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let arr = nums;
  for (a of arr) {
    if (a == val) {
      arr.splice(a, 1);
    }
  }
  console.log(arr);
};

removeElement([2, 3, 3, 2], 2);
