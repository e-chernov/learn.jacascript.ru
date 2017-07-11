function removeClass(obj, cls) {
    var list = obj.className.split(' ');
    for (var i = 0; i < list.length; i++) {
        if (list[i] === cls) {
            list.splice(i, 1);
            i--;
        }
    }
    obj.className = list.join(' ');
}

var obj = {
  className: 'open menu'
};

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
alert( obj.className );

obj = {
  className: 'my menu menu'
};
removeClass(obj, 'menu');
alert( obj.className ); // 'my'