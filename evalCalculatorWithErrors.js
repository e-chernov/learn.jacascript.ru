function evalCalculator() {
   var expression;
   var result;
   while (true) {
       expression = prompt('Введите выражение', '2-');
       if (expression == null) break;
       try {
             result = eval(expression);
             if (isNaN(result)) throw new Error('Результат не определен')
             break;
        } catch (err) {
              alert('Ошибка: ' + err.message + ' Повторите ввод');
       }
   }
   alert( result );
}

evalCalculator();