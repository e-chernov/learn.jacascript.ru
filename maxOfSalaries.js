"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var max = 0;
var name = "";
for (var key in salaries) {
  if (salaries[key] > max) {
    max = salaries[key];
    name = key;
  }
}

alert(name || "нет сотрудников");