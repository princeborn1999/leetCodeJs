/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let arr = nums;
  
  for (a of arr) {
    if (a == val) {
      arr.splice(arr.indexOf(a),1);      
    }
  }
  arr = arr.toString();
  console.log(arr);
  arr = arr.split(",");
  console.log(arr);
  return(arr);
};
//先用string 資料處理

removeElement([2,3,3,2], 2);
