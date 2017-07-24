var leader = {
  name: "Василий Иванович",
  age: 35
};

var str = JSON.stringify(leader);
alert(str);

var obj = JSON.parse(str);
alert( obj );
