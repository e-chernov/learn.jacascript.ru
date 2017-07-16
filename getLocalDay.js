function getLocalDay(date) {
    var d = date.getDay();
    if (d === 0) d = 7;
    return d;
}

var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );      