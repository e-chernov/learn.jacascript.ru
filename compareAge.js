var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

function compareAge(personA, personB) {
  return personA.age - personB.age;
}

people.sort(compareAge);

for (var i = 0; i < people.length; i++) {
  alert(people[i].name);
}