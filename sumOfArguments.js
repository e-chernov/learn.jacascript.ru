function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

alert( sum() );
alert( sum(1) );
alert( sum(1, 2) );
alert( sum(1, 2, 3) );
alert( sum(1, 2, 3, 4) );