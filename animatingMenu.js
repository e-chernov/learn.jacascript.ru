function AnimatingMenu() {
    Menu.apply(this);
    this._timer = 0;
}

AnimatingMenu.prototype = Object.create(Menu.prototype);

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;
Menu.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {
    this._state = Menu.STATE_ANIMATING;
    var self = this;
    this._timer = setTimeout(function() {
        Menu.prototype.open.apply(self);
    }, 1000);
}

AnimatingMenu.prototype.close = function() {
    clearTimeout(this._timer);
    Menu.prototype.close.apply(this);
}

AnimatingMenu.prototype._stateAsString = function() {
  switch (this._state) {
    case Menu.STATE_OPEN:
      return 'открыто';

    case Menu.STATE_CLOSED:
      return 'закрыто';

    case Menu.STATE_ANIMATING:
      return 'анимация';
  }
};


