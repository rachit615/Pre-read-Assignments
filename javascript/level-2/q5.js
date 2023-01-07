function Sort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    while (arr[j] > current && j >= 0) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  console.log(arr);
}
arr = [1, 78, 3, 4, 555, 4, 3, 4];
Sort(arr);
