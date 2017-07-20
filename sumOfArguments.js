function sumArgs() {
  var arr = [].slice.call(arguments);
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива