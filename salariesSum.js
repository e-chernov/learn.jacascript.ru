"use strict";

var salaries = {
  "����": 100,
  "����": 300,
  "����": 250
};

var sum = 0;;
for (var key in salaries) {
  sum += salaries[key];
}
alert(sum);