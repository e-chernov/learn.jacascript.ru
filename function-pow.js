var x = prompt("�������� �����:", "");

var n = prompt("� �������:");

function pow(x,n) {

  var result = 1;

  for (var i = 1; i <= n; i++) {

    result = result * x;

  }

  return result;

}

alert(pow(x,n));