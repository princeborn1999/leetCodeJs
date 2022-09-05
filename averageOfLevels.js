var averageOfLevels = function (root) {
  let arr = root;
  let arg = [];
  let sum = 0;
  let n = 0;

  for (let i = 0; i <= arr.length; i++) {
    //i = 0 1 3 ....
    sum = 0;
    for (let j = 0; j < 2 ** n; j++) {
      //
      //console.log("i=", i, "j=", arr[j + 2 ** n - 1]);
      sum += arr[j + 2 ** n - 1];
    }
    arg.push((sum / 2 ** n).toFixed(5));

    n++;
    i += 2 ** i;
    i--;
  }

  return arg;
};

root = [3, 9, 20, null, null, 15, 7];
//      0  1      3               6  7                    14

ans = averageOfLevels(root);
console.log(ans);
