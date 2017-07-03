//С использованием цикла

function sumTo(n) {

  var result = 0;

  for (var i = 1; i <= n; i++) {

    result += i;

  }

  return result;
 
}


alert(sumTo(1));

alert(sumTo(2));

alert(sumTo(3));

alert(sumTo(4))
;
alert(sumTo(100));

//Через рекурсию

function sumTo(n) {

  var result = 1;

  if (n > 1) result = n + sumTo(n-1);

  return result;
 
}


alert(sumTo(1));

alert(sumTo(2));

alert(sumTo(3));

alert(sumTo(4));

alert(sumTo(100));

//С использованием математики))

function sumTo(n) {
  var result = n * (n + 1) / 2;
  return result; 
}

alert(sumTo(1));
alert(sumTo(2));
alert(sumTo(3));
alert(sumTo(4));
alert(sumTo(100));