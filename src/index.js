module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < str.length; i++) {
    for (let item of bracketsConfig) {
      if (str[i] === item[0] && str[i + 1] === item[1]) {
        str = str.slice(0, i) + str.slice(i + 2);
        i = -1;
        if (str === '') return true;
      }
    }
  }
  return false;
}
