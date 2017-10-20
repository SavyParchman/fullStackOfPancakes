angular.module('app', ['ui.router', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'md.data.table'])
.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('createProfile', {
        url: '/createProfile',
        templateUrl: './views/createProfile/createProfile.html',
        controller: 'createProfileCtrl'
    })
    .state('login', {
        url: '/login',
        templateUrl: './views/login/login.html',
        controller: 'loginCtrl'
    })
    .state('profile', {
        url: '/profile/:id',
        templateUrl: './views/profile/profile.html',
        controller: 'profileCtrl'
    })
    .state('home', {
        url: '/',
        templateUrl: './views/home/home.html',
        controller: 'homeCtrl'
    })
    .state('wallet', {
        url: '/wallet',
        templateUrl: './views/wallet/wallet.html',
        controller: 'walletCtrl'
    })
    .state('exchange', {
        url: '/exchange',
        templateUrl: './views/exchange/exchange.html',
        controller: 'exchangeCtrl'
    })
    .state('test', {
        url: '/test', 
        templateUrl: './views/test/test.html',
        controller: 'profileCtrl'
    })
})


// .run(function($rootScope){
//     $rootScope.$on('$viewContentLoaded', function(event, next) {
//         componentHandler.upgradeAllRegistered();
//     })
// })
