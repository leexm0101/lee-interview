// 原题: https://leetcode-cn.com/problems/reverse-integer/

var reverse = function (x) {
  let abs = x > 0 ? 1 : -1;
  let max = Math.pow(2, 31);
  let num = abs * Number(Math.abs(x).toString().split('').reverse().join(''));
  return num > max * -1 && num < max - 1 ? num : 0;
};

console.log(Number(1534236469));
console.log(reverse(1534236469));
console.log(reverse(-123));