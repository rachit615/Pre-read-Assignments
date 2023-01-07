function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      console.log("not prime");
      return;
    }
  }
  console.log("prime number");
}
isPrime(22);
