var arr = [5, 2, 1, -10, 8];

function compareReversed(a, b) {
    return b - a;
}

arr = arr.sort(compareReversed);

alert(arr);