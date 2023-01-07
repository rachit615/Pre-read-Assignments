//fibonacci series 0, 1, 1, 2, 3, 5, 8, 13, 21 ……

function fibonacci(n) {
  let a, b, c;
  a = 0;
  b = 1;

  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      console.log(a);
      continue;
    }
    if (i == 2) {
      console.log(b);
      continue;
    }
    c = a + b;
    console.log(c + ",");
    a = b;
    b = c;
  }
}
console.log(fibonacci(9));
