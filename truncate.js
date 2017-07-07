function truncate(str, maxlength) {
  if (str.length > 20) {
    str = str.slice(0, maxlength - 3) + "...";
  }
  return str;
}

alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
alert( truncate("Всем привет!", 20) );