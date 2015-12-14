let AddExpenseController = function($scope, UserService, $state, $window) {
  
  $scope.categories = ['Bill', 'Food', 'Grocery', 'Entertainment', 'Kids', 'Music Equipment', 'Making it Rain' ];
  $scope.addExpense = addExpense;
    
  function addExpense(expenseObj) {
    
    //adds expense to 
    UserService.addExpense(expenseObj).then((res) =>{
      $state.go('root.summary');

      //refreshes the page
      $window.location.reload();

  });
  $scope.expense={}
};

};

AddExpenseController.$inject = ['$scope', 'UserService', '$state', '$window'];

export default AddExpenseController;