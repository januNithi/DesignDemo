/**
 * Created by CSS on 16-08-2016.
 */
(function(){

    angular.module('myApp').controller('addEmployeeController',addEmployeeController);

    addEmployeeController.$inject = [
        '$scope',
        'addEmployeeservice',
        '$window'
    ];

    function addEmployeeController($scope,addEmployeeservice,$window) {

        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        }

    }

})();