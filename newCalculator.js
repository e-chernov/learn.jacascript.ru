function Calculator() {
    var a, b;
    this.read = function() {
        a = +prompt('Значение 1', '');
        b = +prompt('Значение 2', '');
    };
    this.sum = function() {
        return a + b;
    };
    this.mul = function() {
        return a * b;
    };
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );