var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  var arr = [];
  var tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (var i = arr.length - 1; i >= 0; i--) {
  alert(arr[i]);
}

}

printReverseList(list);