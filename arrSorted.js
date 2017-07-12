var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = [];

for (i = 0; i < arr.length; i++) {
  arrSorted[i] = arr[i];
}

arrSorted.sort();

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr );