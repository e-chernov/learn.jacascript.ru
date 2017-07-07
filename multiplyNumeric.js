function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (isNumeric(obj[key])) obj[key] *= 2;
  }
}

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

for (var key in menu) {
  alert( menu[key] );
}