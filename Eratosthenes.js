var numbers = [], results = [];
var n = 100;
var p = 2;
var sum = 0;

for (var i = 0; i <= n; i++) { //создаем массив из чисел от 0 до 100
    numbers.push(i);
}

while (p * p < n) {
  for ( i = p + 1; i <= n; i++) {  //делим числа на p, если остатка нет, то заменяем число на 0 ("зачеркиваем")
      if (i % p === 0) numbers[i] = 0;
  }
  while (true) {  //присваиваем p следующее незачеркнутое число
      p++;
      if (numbers[p] != 0) break;
  }
}

for (i = 2; i <= n; i++) {   //формируем массив с результатом 
    if (numbers[i] != 0) results.push( numbers[i] );
 }

 for (i = 0; i < results.length; i++) { //подсчитываем сумму
     sum += results[i];
 }

 alert(sum);

