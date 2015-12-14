let SummaryController = function($scope, UserService, $state, $stateParams, $window) {

  $scope.deleteExpense = deleteExpense;

  UserService.getAllExpenses().then ((res) =>{
    $scope.expenses = res.data.results;
  });

//deletes the selection
  function deleteExpense(obj){
    console.log(obj);
    UserService.deleteExpense(obj).then((res) => {
      $window.location.reload();
      
    });
  }
  

};

SummaryController.$inject = ['$scope', 'UserService', '$state', '$stateParams', '$window'];

export default SummaryController;