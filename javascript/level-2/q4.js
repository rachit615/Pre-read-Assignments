function cumulative_sum(arr) {
  let result = [];
  const len = arr.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    result[i] = sum + arr[i];
    sum += arr[i];
  }
  console.log(result);
}
cumulative_sum([1, 2, 3, 4]);
