function checkAge(age) {

  return (age > 18) ? true : confirm('�������� ���������?');

}


function checkAge(age) {

  return (age > 18) || confirm('�������� ���������?');

}


function min(a,b) {

  if (a < b) return a;

  else if (a > b) return b;

  else return "����������";

}

alert(min(2,5));

alert(min(4,3));

alert(min(6,6));