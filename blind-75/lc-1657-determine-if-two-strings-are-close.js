// https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&envId=leetcode-75

function closeStrings(word1, word2) {
  if (word1.length !== word2.length) return false;
  let mp = new Map();
  let mp2 = new Map();

  for (let ch of word1) {
    mp.set(ch, (mp.get(ch) || 0) + 1);
  }
  for (let ch of word2) {
    mp2.set(ch, (mp2.get(ch) || 0) + 1);
  }

  let chars1 = [...mp.keys()].sort().join("");
  let chars2 = [...mp2.keys()].sort().join("");
  if (chars1 !== chars2) return false;

  return areEqualMapsByValue(mp, mp2);
}

function areEqualMapsByValue(mp1, mp2) {
  let arr1 = [...mp1.values()].sort();
  let arr2 = [...mp2.values()].sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
