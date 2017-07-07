function ucFirst(str) {
  if (str != "") {
    var char = str.charAt(0);
    str = char.toUpperCase() + str.substring(1);
  }
  return str;
}

alert( ucFirst("вася") );