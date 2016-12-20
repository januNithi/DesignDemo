/**
 * Created by CSS on 16-08-2016.
 */
(function(){

    angular.module('myApp').controller('workOrderProcessController',workOrderProcessController);

    workOrderProcessController.$inject = [
        '$scope',
        'workOrderProcessService',
        '$window'
    ];

    function workOrderProcessController($scope,workOrderProcessService,$window) {

        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        }


    }

})();