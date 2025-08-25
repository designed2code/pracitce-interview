// https://alpha.learnersbucket.com/course/frontend-system-design/m26x2gsgepytoklthm5q8

function reverseArrRecursive(arr) {
  function solve(arr, start, end) {
    if (start >= end) return;
    [arr[start], arr[end]] = [arr[end], arr[start]];
    solve(arr, start + 1, end - 1);
  }
  solve(arr, 0, arr.length - 1);
}

const myArray = [1, 2, 3, 4, 5];
reverseArrRecursive(myArray);
console.log(myArray); // Outputs: [5, 4, 3, 2, 1]
