const profileCtrl = require('./profileCtrl.js')

module.exports = app => {
    app.post('/api/user', profileCtrl.findUser, profileCtrl.createProfile);
    app.get('/api/walletReviews/:id', profileCtrl.getWalletReviews);
    app.get('/api/exchangeReviews/:id', profileCtrl.getExchangeReviews);
}