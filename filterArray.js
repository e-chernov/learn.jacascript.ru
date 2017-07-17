function filter(arr, func) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) newArr.push(arr[i]);
    }; 
    return newArr;
};

function inBetween(a, b) {
    return function(x) {
        if (x >= a && x <= b) return true;
    };
};

function inArray(arrFindIn) {
    return function(x) {
       for (var i = 0; i < arrFindIn.length; i++) {
           if (x === arrFindIn[i]) {
               return true;
               break;
           };
       };
    };
}; 


var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2