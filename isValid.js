/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let str = s;
  str = str.split("");

  while (str) {
    let originStr = str.length;
    for (let i = 0; i <= str.length; i++) {
      if (str[i] == "(" && str[i + 1] == ")") {
        str.splice(i + 1, 1);
        str.splice(i, 1);
      } else if (str[i] == "{" && str[i + 1] == "}") {
        str.splice(i + 1, 1);
        str.splice(i, 1);
      } else if (str[i] == "[" && str[i + 1] == "]") {
        str.splice(i + 1, 1);
        str.splice(i, 1);
      }

      console.log(str);
    }
    if (str.length == originStr && str.length != 0) {
      return false;
      console.log(false);
    } else if (str.length == originStr && str.length == 0) {
      return true;
      console.log(true);
    }
  }
};
isValid("([])");
