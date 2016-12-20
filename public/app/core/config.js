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
            .when('/machineProcess', {
            templateUrl: '../app/machineProcess/machineProcess.html',
            controller: 'machineProcessController'
            })
            .when('/workOrderProcess', {
            templateUrl: '../app/workOrderProcess/workOrderProcess.html',
            controller: 'workOrderProcessController'
        });


        $locationProvider.html5Mode(true);
    }
})();