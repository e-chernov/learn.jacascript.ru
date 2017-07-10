var arr = [];
var sum = 0;
var i = 0;

while (true) {
    var value = prompt('Введите значение массива', '');
    if (value === '' || isNaN(+value) || value === null) break;
    arr[i] = +value;
    sum += arr[i];
    i++;
}

alert(sum);

