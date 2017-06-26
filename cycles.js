for (var i = 2; i <= 10; i +=2) {
  alert(i);

} 

var i = 0;

while (i < 3) {

  alert( "номер " + i + "!" );

  i++;

}

while (true) {

  var number = prompt("¬ведите число больше 100","");

  if ((number > 100) || (number == null)) break;

}