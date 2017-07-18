var calculator = {
    read: function() {
        this.a = +prompt('Введите значение 1', '');
        this.b = +prompt('Введите значение 2', '');
    },
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );