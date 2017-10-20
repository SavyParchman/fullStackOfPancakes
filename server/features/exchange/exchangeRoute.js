const exchangeCtrl = require('./exchangeCtrl')

module.exports = app => {
  app.get('/api/exchangeReviews/', exchangeCtrl.getAllExReviews);
  app.post('/api/exchangeReviews/:id', exchangeCtrl.postExchangeReview);

}