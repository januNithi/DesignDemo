(function(){

    angular.module('myApp').controller('workOrderEnteryController',workOrderEnteryController);

    workOrderEnteryController.$inject = [
        '$scope',
        'workOrderEnteryService',
        '$window'
    ];

    function workOrderEnteryController($scope,workOrderEnteryService,$window) {
        $scope.table=false;
        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        };

        $scope.goCheck=function()
        {

            $scope.table=true;
            
        }

    }

})();