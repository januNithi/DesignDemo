
(function(){

    angular.module('myApp').controller('addMachineController',addMachineController);

    addMachineController.$inject = [
        '$scope',
        'addMachineService',
        '$window'
    ];

    function addMachineController($scope,addMachineService,$window) {

        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        }

    }

})();