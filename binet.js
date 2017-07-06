function fibBinet(n) {
  var phi = (1 + Math.sqrt(5)) / 2;

  return Math.round( Math.pow(phi, n) / Math.sqrt(5))

}

alert( fibBinet(77) );


function fib(n) {

  var a = 1,

    b = 0,

    x;

  for (i = 0; i < n; i++) {

    x = a + b;

    a = b

    b = x;

  }

  return b;

}



alert( fib(77) );