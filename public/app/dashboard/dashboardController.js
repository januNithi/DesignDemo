
(function(){

    angular.module('myApp').controller('dashboardController',dashboardController);

    dashboardController.$inject = [
        '$scope',
        'dashboardService',
        '$window'
    ];

    function dashboardController($scope,dashboardService,$window) {

     $scope.loadData=function()
     {

         $window.location.href='/machineProcess';
     }

        $scope.goToOrder=function()
        {
            $window.location.href='/workOrderProcess';

        }
        $scope.goToModels=function()
        {
            $window.location.href='/workOrderProcess';

        }

    }

})();