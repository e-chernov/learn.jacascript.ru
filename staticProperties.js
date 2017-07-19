function Article() {
  this.created = new Date();
  Article.count++;
  Article.lastDate = this.created;
  // ... ваш код ...
}
Article.count = 0;
Article.lastDate = 0;

Article.showStats = function() {
  alert('Запущено ' + this.count + 'раз. Последний запуск ' + this.lastDate);
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
