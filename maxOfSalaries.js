"use strict";

var salaries = {
  "����": 100,
  "����": 300,
  "����": 250
};

var max = 0;
var name = "";
for (var key in salaries) {
  if (salaries[key] > max) {
    max = salaries[key];
    name = key;
  }
}

alert(name || "��� �����������");