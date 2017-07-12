function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
      for(var j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
              arr.splice(j, 1);
              j--;
          }
      }
  }
  return arr;
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()