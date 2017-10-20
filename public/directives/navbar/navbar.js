angular.module('app').directive('navbar', function() {
  return {
      templateUrl: './directives/navbar/navbar.html',
      retrict: 'E',
      controller: function( $scope, $rootScope, loginService ){
          $scope.loggedIn = false
          $rootScope.$on('loggedIn', function( event, user ){
              $scope.loggedIn = true
              $scope.user = user
              $scope.currentNavItem = 'page1';
              $scope.goto = function(page) {
                    console.log("Goto " + page);
                  }
          })
      }
  }

})