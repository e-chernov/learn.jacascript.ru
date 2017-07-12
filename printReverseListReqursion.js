var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  alert( list.value );
}



printReverseList(list);