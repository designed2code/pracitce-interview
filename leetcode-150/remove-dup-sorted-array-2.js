// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

function removeDuplicates(nums) {
  let k = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

/*
------------ Iteration 1: i = 2 ------------

Current value: nums[2] === 1

Compare to: nums[k - 2] === nums[0] === 1

Test: 1 !== 1 → false

Action: Skip. Don’t write anything; k stays 2.

Array now: [1, 1, 1, 2, 2, 3]


------------ Iteration 2: i = 3 ------------

Current value: nums[3] === 2

Compare to: nums[k - 2] === nums[0] === 1

Test: 2 !== 1 → true

Action:

Write nums[k] = nums[2] = 2

Increment k → k = 3

Array now: [1, 1, 2, 2, 2, 3]

(Note: we overwrote the old nums[2] = 1 with 2.)

------------ Iteration 3: i = 4 ------------

Current value: nums[4] === 2

Compare to: nums[k - 2] === nums[1] === 1

Test: 2 !== 1 → true

Action:

Write nums[k] = nums[3] = 2

Increment k → k = 4

Array now: [1, 1, 2, 2, 2, 3]

(We overwrote nums[3], but it was already 2.)

------------ Iteration 4: i = 5 ------------

Current value: nums[5] === 3

Compare to: nums[k - 2] === nums[2] === 2

Test: 3 !== 2 → true

Action:

Write nums[k] = nums[4] = 3

Increment k → k = 5

Array now: [1, 1, 2, 2, 3, 3]

(We overwrote nums[4] = 2 with 3.)


Loop ends (we’ve done i = 2,3,4,5). We return k, which is now 5.
The first 5 entries of nums are:

[1, 1, 2, 2, 3]
*/
