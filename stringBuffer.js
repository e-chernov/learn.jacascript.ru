function makeBuffer() {
  var text = '';

  function buffer(piece) {
    if (arguments.length == 0) { // вызов без аргументов
      return text;
    }
    text += piece;
  };

  buffer.clear = function() {
      text = '';
  }

  return buffer;
};


var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);

alert( buffer() ); // '010'

buffer.clear();

alert( buffer() ); // ""