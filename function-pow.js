var x = prompt("Âîçâåäåì ÷èñëî:", "");

var n = prompt("Â ñòåïåíü:");

function pow(x,n) {

  var result = x;

  for (var i = 1; i <= n; i++) {

    result = result * x;

  }

  return result;

}

alert(pow(x,n));
