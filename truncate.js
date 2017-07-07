function truncate(str, maxlength) {
  if (str.length > 20) {
    str = str.slice(0, maxlength - 3) + "...";
  }
  return str;
}

alert( truncate("���, ��� ��� �������� �� ������� �� ��� ����:", 20) );
alert( truncate("���� ������!", 20) );