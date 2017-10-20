angular.module('app').service('exchangeService', function( $http ) {
  
      this.getAllExReviews = function() {
          return $http.get('/api/exchangeReviews')
      }
  
      this.getUserUsername = function() {
          return $http.get('/api/user')
      }
  
  });