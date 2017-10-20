angular.module('app')
.controller('createProfileCtrl', function( $scope, $state, createProfileService, loginService, $rootScope ){
//------ createProfile ------
    $scope.createProfile = function(user){
        createProfileService.createProfile(user)
            .then(function(res){
                loginService.saveUser(res.data)
                $rootScope.$emit('loggedIn', res.data)
                $state.go('profile', {id: res.data.user_id})
            })
    }

    // $scope.imagePath = 'img/washedout.png';
    $scope.showHints = true;
  
      // $scope.user = {
      //   name: "",
      //   email: "",
      //   social: "123456789",
      //   phone: "N/A"
      // };

})