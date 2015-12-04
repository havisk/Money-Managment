let SummaryController = function($scope, UserService, $state, $stateParams) {

  $scope.deleteExpense = deleteExpense;

  UserService.getAllExpenses().then ((res) =>{
    $scope.expenses = res.data.results;
  });

  function deleteExpense(obj){
    console.log(obj);
    UserService.deleteExpense(obj).then((res) => {
      $state.go('root.summary');
      
    });
  }
  

  // $scope.summaryData = [];

  // var categories = cate
  
};

SummaryController.$inject = ['$scope', 'UserService', '$state', '$stateParams'];

export default SummaryController;