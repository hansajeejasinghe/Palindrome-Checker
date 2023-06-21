function palindrome(str) {
  // remove non-alphanumeric characters
  str = str.replace(/[^0-9a-z]/gi, '');
  // convert to lower case
  str = str.toLowerCase();
  // check for palindrome
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length-1-i]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");