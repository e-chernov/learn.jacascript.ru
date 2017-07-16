function getLastDayOfMonth(year, month) {
    var date = new Date;
    date.setFullYear(year, month + 1);
    date.setDate(0);
    return date.getDate();
}

alert( getLastDayOfMonth(2012, 1) );