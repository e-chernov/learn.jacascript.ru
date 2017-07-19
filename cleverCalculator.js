function Calculator() {
    var methods = {
        '+': function(a, b) {return a + b},
        '-': function(a, b) {return a - b},
    };
    this.calculate = function(str) {
        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
        return methods[op](a, b);
    };
    this.addMethod = function(name, func) {
        methods[name] = func;
    };
};

var calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8