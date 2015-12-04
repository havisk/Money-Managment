
let config = function($stateProvider, $urlRouterProvider,) { 

  $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('root', {
        abstract: true,
        templateUrl: 'templates/layout.tpl.html',
       })
      .state('root.home', {
        url: '/',
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeController'    
      })
      .state('root.add', {
         url: '/add',
         templateUrl: 'templates/addExpense.tpl.html',
         controller: 'AddExpenseController'
       })
      .state('root.summary', {
        url: '/summary',
        templateUrl: 'templates/summary.tpl.html',
        controller: 'SummaryController'
       })
      .state('root.update',{
        url: '/update/:expenseId',
        templateUrl: 'templates/update.tpl.html',
        controller: 'UpdateController'
      })
      .state('root.single', {
        url: '/single/:expenseId',
        templateUrl: 'templates/single.tpl.html',
        controller: 'SingleExpenseController'
      })

}
config.$inject = ['$stateProvider', '$urlRouterProvider']

export default config;