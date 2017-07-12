function aclean(arr) {
  
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    var tmp = arr[i].split('');
    tmp.sort();
    arr[i] = tmp.join('');
  }
  
  arr.sort();

  for (i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}

var arr = ["���", "������", "������", "���", "������", "������", "������"];

alert( aclean(arr) ); // "���,������,������" ��� "���,������,������"