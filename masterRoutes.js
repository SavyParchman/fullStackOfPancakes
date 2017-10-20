const profileRoute = require('./server/features/profile/profileRoute.js')
, loginRoute = require('./server/features/login/loginRoute.js')
, getUserByIdRoute = require('./server/features/getUserById/getUserByIdRoute.js')
, walletRoute = require('./server/features/wallet/walletRoute.js')
, exchangeRoute = require('./server/features/exchange/exchangeRoute.js')

module.exports = app => {
profileRoute(app);
loginRoute(app);
getUserByIdRoute(app);
walletRoute(app);
exchangeRoute(app);
}