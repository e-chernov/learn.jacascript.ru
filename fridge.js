function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
    Machine.apply(this, arguments);
    this._food = [];
    var maxFood = power/100;
    
    this.addFood = function() {
        if (!this._enabled) return alert('Ошибка! Холодильник выключен');
        for (i = 0; i < arguments.length; i++) {
            if (this._food[maxFood - 1]) return alert('Ошибка! Слишком много еды');
            this._food.push(arguments[i]);
        }
    }

    this.getFood = function() {
        var food = [];
        for (i = 0; i < this._food.length; i++) {
            food.push(this._food[i]);
        }
        return food;
    }
}

var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен

// создать холодильник мощностью 500 (не более 5 еды)
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье