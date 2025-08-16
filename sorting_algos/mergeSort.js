// Refer :- https://www.youtube.com/watch?v=aiUHB-3EOg8
function recursiveMergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);

  let leftHalf = recursiveMergeSort(firstHalf);
  let rightHalf = recursiveMergeSort(secondHalf);
  return merge(leftHalf, rightHalf);
}
function merge(a, b) {
  let i = 0;
  let j = 0;
  let k = 0;
  let res = [];
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      res[k] = a[i];
      i++;
      k++;
    } else {
      res[k] = b[j];
      j++;
      k++;
    }
  }
  while (i < a.length) {
    res[k] = a[i];
    i++;
    k++;
  }

  while (j < b.length) {
    res[k] = b[j];
    j++;
    k++;
  }
  return res;
}

console.log(recursiveMergeSort([7, 4, 1, 3, 6, 8]));
