function addClass(obj, cls) {
    var list = obj.className.split(' ');
    var already = false;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === cls) already = true;
    }
    if (!already) list.push(cls);
    obj.className = list.join(' ');
}

var obj = {
  className: 'open menu'
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"