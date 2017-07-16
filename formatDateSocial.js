function formDate(date) {
    var day = date.getDate();
    if (day < 10) day = '0' + day;
    var month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    var year = String(date.getFullYear()).slice(2);
    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    var minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
}

function formatDate(date) {
    var now = new Date;
    var diff = (now.getTime() - date.getTime()) / 1000;
    if (diff < 1) return 'только что';
    else if (diff < 60) return String(Math.round(diff)) + ' секунд назад';
    else if (diff < 3600) return String(Math.round(diff / 60)) + ' минут назад';
    else return formDate(date);
}

alert( formatDate(new Date(new Date - 1)) ); // "только что"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"