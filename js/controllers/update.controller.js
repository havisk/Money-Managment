let UpdateController = function($scope, $stateParams, UserService) {

  $scope.categories = ['Bill', 'Food', 'Grocery', 'Entertainment', 'Kids', 'Music Equipment', 'Making it Rain' ];
  // $scope.updateExpense = updateExpense;

  UserService.getExpense($stateParams.expenseId).then((res) => {
    $scope.singleExpense = res.data;
    console.log(res);
  });
  
  $scope.updateExpense = function(obj) {
    UserService.updateExpense(obj).then((res) => {
      console.log('here');
      $state.go('root.summary');
    });
    
  };
  

};

UpdateController.$inject = ['$scope', '$stateParams', 'UserService'];

export default UpdateController;