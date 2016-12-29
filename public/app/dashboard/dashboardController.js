
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
        $scope.loadMachine=function()
        {
            $window.location.href='/addMachine';

        }
        $scope.loadEmp=function()
        {
            $window.location.href='/addemployee';

        }
        $scope.loadProcess=function()
        {

            $window.location.href='/addProcess';

        }
        $scope.goToWorkOrder=function()
        {

            $window.location.href='/workOrderEntry';

        }
        $scope.loadItem=function()
        {
            $window.location.href='/itemEntry';

        }
    }

})();