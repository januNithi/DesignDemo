(function() {
    angular
        .module('myApp')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];


    function config($routeProvider, $locationProvider) {
        $routeProvider

            .when('/login', {
                controller: 'loginController',
                templateUrl: '../app/login/login.html'
            })
            .when('/dashboard', {
            templateUrl: '../app/dashboard/dashboard.html',
            controller: 'dashboardController'
            })
            .when('/addemployee', {
                templateUrl: '../app/addEmployee/addEmployee.html',
                controller: 'addEmployeeController'
            })
            .when('/addMachine', {
                templateUrl: '../app/add Machine/addMachine.html',
                controller: 'addMachineController'
            })
            .when('/addProcess', {
                templateUrl: '../app/addProcess/addProcess.html',
                controller: 'addProcessController'
            })
            .when('/itemEntry', {
                templateUrl: '../app/itemEntry/itemEntry.html',
                controller: 'itemEntryController'
            })
            .when('/machineProcess', {
            templateUrl: '../app/machineProcess/machineProcess.html',
            controller: 'workOrderProcessController'
            })
            .when('/workOrderProcess', {
            templateUrl: '../app/workOrderProcess/workOrderProcess.html',
            controller: 'workOrderProcessController'
             })
            .when('/workOrderEntry', {
                templateUrl: '../app/workOrderEntery/workOrderEntry.html',
                controller: 'workOrderEnteryController'
            });

        $locationProvider.html5Mode(true);
    }
})();