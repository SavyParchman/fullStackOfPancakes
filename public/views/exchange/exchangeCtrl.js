angular.module("app").controller("exchangeCtrl", function($scope,
  $mdEditDialog, $q, $timeout, $filter, exchangeService ) {
 
//------ getAllReviews ------
function getAllExReviews() {
 exchangeService.getAllExReviews().then(function(res) {
   console.log(res);
   $scope.exReviews = res.data;})}
   getAllExReviews();

//------ getUserUsername ------
function getUserUsername() {
   exchangeService.getUserUsername().then(function(res) {
     console.log(res);
     $scope.users = res.data;})}
     getUserUsername();
 

   $scope.default = {
     order: 'name',
     limit: 5,
     page: 1
   };
  
   $scope.options = {
     largeEditDialog: false
      };

   $scope.editInput = function (event, detail) {
        
     var editDialog = {
       modelValue: exchangeReview.comment,
       placeholder: 'enter some Input',
       save: function (input) {
         exchangeReview.comment = input.$modelValue;
       },
       targetEvent: event,
       title: 'Edit Input',
       validators: {
         'md-maxlength': 30
       }
     };
     
     var promise;
     
     if($scope.options.largeEditDialog) {
       promise = $mdEditDialog.large(editDialog);
     } else {
       promise = $mdEditDialog.small(editDialog);
     }
     
    /*  promise.then(function (ctrl) {
       var input = ctrl.getInput();
       
       input.$viewChangeListeners.push(function () {
         input.$setValidity('test', input.$modelValue !== 'test');
       });
     }); */
   };

});
