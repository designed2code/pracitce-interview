var rotate = function (nums, k) {
  let n = nums.length;
  k = k % n;
  function reverse(start, end, arr) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  // 0 to n-1
  reverse(0, n - 1, nums);
  // 0 to k-1
  reverse(0, k - 1, nums);
  // k to n-1
  reverse(k, n - 1, nums);
};
