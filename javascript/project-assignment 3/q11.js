//bubble sort

function bubbleSort(arr) {
  let n = arr.length;
  let temp;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}
let arr = [1, 5, 2, 6, 7];
bubbleSort(arr);
