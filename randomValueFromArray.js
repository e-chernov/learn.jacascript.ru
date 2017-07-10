var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var min = 0, max = 3;
var rand = min + Math.floor(Math.random() * (max + 1 - min));
alert( arr[rand] );