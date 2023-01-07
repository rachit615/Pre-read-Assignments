//JavaScript program to reverse the string using recursion.

function reverse_string(str) {
  if (str == "") return "";
  reverse_string(str.substring(1)) + str.charAt(0);
}

reverse_string("rachit");
