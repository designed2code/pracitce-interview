// Refer https://www.youtube.com/watch?v=EU9FIt1t-Is

// GFG PRACTICE LINK https://www.geeksforgeeks.org/problems/selection-sort/1
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([2, 9, 5, 1, 3]));
