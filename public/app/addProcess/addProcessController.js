
(function(){

    angular.module('myApp').controller('addProcessController',addProcessController);

    addProcessController.$inject = [
        '$scope',
        'addProcessService',
        '$window'
    ];

    function addProcessController($scope,addProcessService,$window) {

        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        }

    }

})();