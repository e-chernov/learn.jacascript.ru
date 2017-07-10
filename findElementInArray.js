arr = ["test", 2, 1.5, false];

function find(arr, value) {
    for( var i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}

alert( find(arr, "test") ); // 0
alert( find(arr, 2) ); // 1
alert( find(arr, 1.5) ); // 2

alert( find(arr, 0) ); // -1