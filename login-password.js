var login = prompt("��� ������?","");

if (login == null) alert("���� �������");

else if (login != "�����") alert("� ��� �� ����");

else {
  var password = prompt("������?","");

  if (password == null) alert("���� �������");

  else if (password == "������ ���������") alert("����� ����������");

  else alert("������ �������");

}  