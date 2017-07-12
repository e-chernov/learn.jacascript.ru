var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function printList(list) {
  var tmp = list;
  while (tmp) {
    alert( tmp.value );
    tmp = tmp.next;
  }
}

printList(list);