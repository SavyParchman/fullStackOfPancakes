angular.module('app').service('walletService', function( $http ){

    this.getAllReviews = function() {
        return $http.get('/api/walletReviews')
    }

    this.getUserUsername = function() {
        return $http.get('/api/user')
    }

});