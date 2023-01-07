//factorial of a number

function factorial(n) {
  if (n == 1) return 1;
  return n * (n - 1);
}

console.log(factorial(5));
