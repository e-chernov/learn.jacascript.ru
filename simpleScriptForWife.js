    var message = 'Привет, Даша!:-*';
    var p = document.createElement('p');
    var timeOut = 500;
    
    document.body.appendChild(p);
  
    for (let i = 0; i < message.length; i++) {
      setTimeout(function() {
        p.innerHTML += message[i];
      }, timeOut);
      timeOut += 500;
    }