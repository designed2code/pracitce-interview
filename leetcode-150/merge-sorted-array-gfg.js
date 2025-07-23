// https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1
// https://takeuforward.org/data-structure/merge-two-sorted-arrays-without-extra-space/
class Solution {
  mergeArrays(arr1, arr2, n = arr1.length, m = arr2.length) {
    let left = n - 1;
    let right = 0;
    while (left >= 0 && right < m) {
      if (arr1[left] > arr2[right]) {
        [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
        left--;
        right++;
      } else {
        break;
      }
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
  }
}
