/**
 * Created by CSS on 16-08-2016.
 */
(function(){

    angular.module('myApp').controller('machineProcessController',machineProcessController);

    machineProcessController.$inject = [
        '$scope',
        'machineProcessService',
        '$window'
    ];

    function machineProcessController($scope,machineProcessService,$window) {

        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        }

    }

})();