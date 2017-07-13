function f(x) {
  if (arguments.length >= 1) alert(1);
  else alert(0);
}

f(undefined); // 1
f(); // 0