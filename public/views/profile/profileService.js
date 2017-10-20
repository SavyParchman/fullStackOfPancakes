angular.module('app')
.service('profileService', function( $http, loginService ){

    this.getWalletReviews = function(id) {
        return $http.get('/api/walletReviews/' + id)
    }

    this.postWalletReview = function(review, id, poster_id) {
        return $http.post('/api/walletReviews/' + id, 
        {review: review, poster_id: poster_id})
    }    

    this.getExchangeReviews = function(id) {
        return $http.get('/api/exchangeReviews/' + id)
    }

    this.postExchangeReview = function(review, id, poster_id) {
        return $http.post('/api/exchangeReviews/' + id, 
        {review: review, poster_id: poster_id})
    }    

})