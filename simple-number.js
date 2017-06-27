var min = 2, max = 10;

for (var i = min; i <= max; i++) {

  var simple = false;

  if (i == 2) simple = true;

  else {

    var j = 2;

    while (j < i) {

      if ((i % j) == 0) {

        simple = false;

        break;

      }

      simple = true;

      j++;

    }

  }

  if (simple) alert(i);

}