import  angular from 'angular';
import 'angular-ui-router';
import config from './config';

//constants
import  PARSE from './constant/parse.constant';

//controllers
import HomeController from './controllers/home.controller';
import AddExpenseController from './controllers/addexpense.controller';
import SummaryController from './controllers/summary.controller';
import SingleExpenseController from './controllers/singleexpense.controller';
import UpdateController from './controllers/update.controller';

//services
import UserService from './services/user.service';







angular
  .module('app',['ui.router'])
  .config(config)
  .controller('AddExpenseController', AddExpenseController)
  .controller('HomeController', HomeController)
  .controller('SummaryController', SummaryController)
  .controller('SingleExpenseController', SingleExpenseController)
  .controller('UpdateController', UpdateController)

  .constant('PARSE', PARSE)

  .service('UserService', UserService)
  