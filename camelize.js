function camelize(str) {
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == '-') {
            arr[i + 1] = arr[i + 1].toUpperCase();
            arr.splice(i, 1);
        }
    }
    str = arr.join('');
    return str;
}

alert( camelize("background-color") );
alert( camelize("list-style-image") );
alert( camelize("-webkit-transition") );