function isPalindrome(s) {
  const len = s.length;
  for (let i = 0; i < len / 2; i++) {
    if (s[i] != s[len - i - 1]) {
      console.log("not a palnidrome");
      return;
    }
  }
  console.log("valid palindrome");
}
isPalindrome("cac");
