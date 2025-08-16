// https://leetcode.com/problems/longest-substring-without-repeating-characters/?envType=study-plan-v2&envId=top-interview-150

function lengthOfLongestSubstring(s) {
  let i = 0;
  let j = 0;
  let set = new Set();
  let n = s.length;
  let maxLen = -Infinity;
  while (j < n) {
    // First check then add into the set this point is very important to note
    while (set.has(s[j])) {
      set.delete(s[i]);
      i++;
    }
    set.add(s[j]);
    maxLen = Math.max(maxLen, j - i + 1);
    j++;
  }
  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
