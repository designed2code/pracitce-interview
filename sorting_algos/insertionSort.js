// Refer https://www.youtube.com/watch?v=MMt2x6an_i8
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([2, 9, 5, 1, 3]));
