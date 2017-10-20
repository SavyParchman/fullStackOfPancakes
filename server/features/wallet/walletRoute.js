const walletCtrl = require('./walletCtrl')

module.exports = app => {
  app.get('/api/walletReviews/', walletCtrl.getAllReviews);
  app.post('/api/walletReviews/:id', walletCtrl.postWalletReview);

}