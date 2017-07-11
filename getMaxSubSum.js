function getMaxSubSum(arr) {
    var sum = 0, sumMax = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = arr[i];
        if (sum > sumMax) sumMax = sum;
        for (var j = i + 1; j < arr.length; j++) {
           sum += arr[j];
           if (sum > sumMax) sumMax = sum;
        }
    }
    return sumMax;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([2, -1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );
alert( getMaxSubSum([1, 2, 3]) );