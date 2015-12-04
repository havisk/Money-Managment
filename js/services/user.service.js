let UserService = function($http, PARSE) {



  let url = PARSE.URL + 'classes/expense/';

  let checkAuth = function(){
    return true;
  }

  this.getAllExpenses   = getAllExpenses;
  this.addExpense       = addExpense;
  this.deleteExpense    = deleteExpense;
  this.getExpense       = getExpense;
  this.updateExpense    = updateExpense;

  console.log(this);

  function getAllExpenses(){
    if(checkAuth()){
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
    }
  };

  function getExpense(expenseId){
    if(checkAuth()){
      return $http({
        method: 'GET',
        url: url + expenseId,
        headers: PARSE.CONFIG.headers,
        cache: true
      });
    }
    
  };

  function Expense (obj) {
    this.category = obj.category;
    this.amount = obj.amount;
    this.description = obj.description;
    this.objectId = obj.objectId;
  };

  
  function addExpense (obj){
    let e = new Expense(obj);
    return $http.post(url, e, PARSE.CONFIG);
  };

  function updateExpense(obj){
    return $http.put(url + obj.objectId, obj, PARSE.CONFIG);
  };

  function deleteExpense(obj) {
    console.log(obj);
    return $http.delete(url + obj.objectId, PARSE.CONFIG);
  };

}; 

  

UserService.$inject = ['$http', 'PARSE'];

export default UserService;