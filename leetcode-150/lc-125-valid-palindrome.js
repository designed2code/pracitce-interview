// https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

/*
Let's break down /^a-z0-9]/g in simple terms:

/ and /: Think of these as the "start" and "end" markers for our special search pattern. It's like saying, "Here comes my search rule!"

[ and ]: These create a "group" or a "list of characters to look for." It's like saying, "I'm interested in finding characters that are one of these..."

^ (inside the []): This is the trickiest part. When ^ is the very first thing inside the square brackets, it means "NOT". It reverses the meaning of the group. So, instead of "match one of these," it means "match one character that is NOT one of these."

a-z: This is a shortcut for "any lowercase letter from 'a' all the way to 'z'."

0-9: This is a shortcut for "any digit from '0' all the way to '9'."

So, [^a-z0-9] literally means: "Any character that is NOT a lowercase letter AND NOT a digit." This includes uppercase letters, spaces, punctuation (!@#$%), symbols (&*-+), etc.

/g: This is a "flag" at the very end. It stands for "global". It tells the computer: "Don't just find the first character that matches my rule; find ALL of them in the entire string."

Putting it all together, in plain English:

"Find every single character in the string that is NOT a lowercase letter (a-z) and NOT a number (0-9)."

*/
