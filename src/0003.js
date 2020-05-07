// 原题: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let _max = 0;
  let strIndex = 0;
  let _strIndex = 0;
  let strMap = {}
  while (strIndex < s.length) {
    if (s[_strIndex] && !strMap[s[_strIndex]]) { // 是否存在
      strMap[s[_strIndex]] = true;
      _strIndex++;
      ++_max;
    } else {
      strMap = {};
      _strIndex = ++strIndex;
      max < _max ? max = _max : void(0);
      _max = 0;
    }
  }
  return max;
};

console.log('abcabcbb', lengthOfLongestSubstring('abcabcbb')); // 3
console.log('bbbbb', lengthOfLongestSubstring('bbbbb')); // 1 
console.log('pwwkew', lengthOfLongestSubstring('pwwkew')); // 3 