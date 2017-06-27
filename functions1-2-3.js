function checkAge(age) {

  return (age > 18) ? true : confirm('Родители разрешили?');

}


function checkAge(age) {

  return (age > 18) || confirm('Родители разрешили?');

}


function min(a,b) {

  if (a < b) return a;

  else if (a > b) return b;

  else return "Неизвестно";

}

alert(min(2,5));

alert(min(4,3));

alert(min(6,6));