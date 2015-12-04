let AddExpenseController = function($scope, UserService) {
  
  $scope.categories = ['Bill', 'Food', 'Grocery', 'Entertainment', 'Kids', 'Music Equipment', 'Making it Rain' ];
  $scope.addExpense = addExpense;
    
  function addExpense(expenseObj) {
    
    
    UserService.addExpense(expenseObj).then((res) =>{

  });
  $scope.expense={}
};

};

AddExpenseController.$inject = ['$scope', 'UserService'];

export default AddExpenseController;