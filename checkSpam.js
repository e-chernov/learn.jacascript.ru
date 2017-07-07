function checkSpam(str) {
  var str = str.toLowerCase();
  var isSpam = false
  if (~str.indexOf("viagra") || ~str.indexOf("xxx")) { 
    isSpam = true;
      }
  return isSpam;
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );