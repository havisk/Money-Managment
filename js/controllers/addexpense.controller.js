let AddExpenseController = function($scope, UserService, $state, $window) {
  
  $scope.categories = ['Bill', 'Food', 'Grocery', 'Entertainment', 'Kids', 'Music Equipment', 'Making it Rain' ];
  $scope.addExpense = addExpense;
    
  function addExpense(expenseObj) {
    
    
    UserService.addExpense(expenseObj).then((res) =>{
      $state.go('root.summary');
      $window.location.reload();

  });
  $scope.expense={}
};

};

AddExpenseController.$inject = ['$scope', 'UserService', '$state', '$window'];

export default AddExpenseController;