angular.module("app").controller("profileCtrl",
function( $scope, $state, $stateParams, $rootScope, 
  $location, $anchorScroll, loginService, profileService ) {

  loginService.getUserById(parseInt($stateParams.id)).then(response => {
    $scope.user = response.data[0];
    if ($scope.user.user_id == $stateParams.id) {
      $scope.user.admin = true;
    }
  });

  profileService.getWalletReviews($stateParams.id)
      .then(response => {
          $scope.walletReviews = response.data
})

  $scope.postWalletReview = function(review){
      var poster_id = loginService.getUser().user_id
      profileService.postWalletReview(review, $stateParams.id, poster_id)
          .then(res => { console.log(res) })
          $state.go('wallet');
      };

  profileService.getExchangeReviews($stateParams.id)
    .then(response => {
        $scope.exchangeReviews = response.data
})

  $scope.postExchangeReview = function(review){
    var poster_id = loginService.getUser().user_id
    profileService.postExchangeReview(review, $stateParams.id, poster_id)
        .then(res => { console.log(res) })
        $state.go('exchange');
    };



$scope.gotoTop = function() {
// set the location.hash to the id of
// the element you wish to scroll to.
$location.hash('top-left');
// call $anchorScroll()
$anchorScroll();};

});