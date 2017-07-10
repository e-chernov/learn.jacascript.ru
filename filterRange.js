function filterRange(arr, a, b) {
    var filteredArr = [];
    for( var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) filteredArr.push(arr[i]);
    }
    return filteredArr;
}

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);

alert(filtered);