var x = prompt("Возведем число:", "");

var n = prompt("В степень:");

function pow(x,n) {

  var result = 1;

  for (var i = 1; i <= n; i++) {

    result = result * x;

  }

  return result;

}

alert(pow(x,n));