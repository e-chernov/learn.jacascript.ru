function aclean(arr) {

  var arrtmp = [];
  
  for (var i = 0; i < arr.length; i++) { //создаем копию массива с отсортированными элементами
    arrtmp[i] = arr[i].toLowerCase();
    var tmp = arrtmp[i].split('');
    tmp.sort();
    arrtmp[i] = tmp.join('');
  }

  for (i = 0; i < arrtmp.length; i++) {  //проверяем для каждого элемента копии 
      for (var j = i + 1; j < arrtmp.length; j++) {
          if (arrtmp[i] === arrtmp[j]) { //равен ли он другому элементу копии
              arrtmp.splice(j, 1); //здесь удаляем для синхронизации счетчика
              arr.splice(j, 1); //если равен, то удаляем элемент с таким же номером из массива-оригинала
              j--;  
          }
      }
  }
  
  return arr;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
