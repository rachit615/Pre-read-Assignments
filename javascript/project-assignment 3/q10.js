//QUICK SORT

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {
  //let last element to be pivot
  let pivot = arr[high];
  //take index i to track the position of last element that is part of left[]<pivot
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function quicksort(arr, low, high) {
  if (low > high) {
    return;
  }
  //find the correct index of pivot
  let pivotIndex = partition(arr, low, high);
  //recursively call on teh left and right sub-arrays between pivot.
  quicksort(arr, low, pivotIndex - 1);
  quicksort(arr, pivotIndex + 1, high);
}
arr = [1, 2, 3, 4, 5];
quicksort(arr, 0, arr.length - 1);
console.log(arr);
