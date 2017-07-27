var head = {
  glasses: 1,
};

var table = {
  pen: 3,
  __proto__: head
};

var bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

var pockets = {
  money: 2000,
  __proto__: bed
};

alert( pockets.pen );
alert( bed.glasses );
alert( table.money );

function benchMarking(func) {
    var start = new Date;
    func();
    var finish = new Date;
    alert((finish - start) + 'мс');
}

benchMarking(function() { alert(pockets.glasses) });
benchMarking(function() { alert(head.glasses) });