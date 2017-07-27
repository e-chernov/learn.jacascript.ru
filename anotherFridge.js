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

    this.filterFood = function(func) {
        var result = [];
        for (var i = 0; i < this._food.length; i++) {
            if (func.call(this, this._food[i])) result.push(this._food[i]);
        }
        return result;
    }

    this.removeFood = function(item) {
        for (var i = 0; i < this._food.length; i++) {
            if (this._food[i] == item) {
                this._food.splice(i, 1);
                i--;
            }
        }
    }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length ); // 2

