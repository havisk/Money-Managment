let SingleExpenseController = function($scope, $stateParams, UserService, $state) {

  $scope.deleteExpense = deleteExpense;
  console.log($stateParams);

 UserService.getExpense($stateParams.expenseId).then((res) => {
  $scope.singleExpense = res.data;
  console.log(res);
 });

 function deleteExpense(obj){
    UserService.delete(obj).then((res) => {
      $state.go('root.summary');
      
    });
  }
  

};

SingleExpenseController.$inject = ['$scope', '$stateParams', 'UserService', '$state'];

export default SingleExpenseController;