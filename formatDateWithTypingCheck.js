function formatDate(date) {
   var typeOfObject = {}.toString.call(date).slice(8, -1);
   var d = new Date;

   function showDate(date) {
         var day, month, year;
         day = date.getDate();
         if (day < 10) day = '0' + day;
         month = date.getMonth() + 1;
         if (month < 10) month = '0' + month;
         year = String(date.getFullYear()).slice(2);
         return day + '.' + month + '.' + year;
   }

   switch(typeOfObject) {
      case 'Date':
         return showDate(date);
         break;
      case 'String':
         d = new Date(date);
         return showDate(d);
         break;
      case 'Number':
         d.setTime(date * 1000);
         return showDate(d);
         break;
      case 'Array':
         d.setFullYear(date[0]);
         d.setMonth(date[1]);
         d.setDate(date[2]);
         return showDate(d);
         break;
   }
}

alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14
