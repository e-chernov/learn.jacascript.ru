function formatDate(date) {
    var day = date.getDate();
    if (day < 10) day = '0' + day;
    var month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    var year = String(date.getFullYear()).slice(2);
    return day + '.' + month + '.' + year;
}

var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'