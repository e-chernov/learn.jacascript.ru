function f(x) {
  alert( x );
}

function delay(func, ms) {
   return function() {
    var savedThis = this;
    var savedArgs = arguments;

    setTimeout(function() {
      func.apply(savedThis, savedArgs);
    }, ms);
  };

};

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
