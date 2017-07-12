var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function printList(list) {
  alert( list.value );
  if (list.next) {
    printList(list.next);
  }
}



printList(list);