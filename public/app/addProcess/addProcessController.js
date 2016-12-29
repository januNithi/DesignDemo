
(function(){

    angular.module('myApp').controller('addProcessController',addProcessController);

    addProcessController.$inject = [
        '$scope',
        'addProcessService',
        '$window'
    ];

    function addProcessController($scope,addProcessService,$window) {
        $scope.getProcess=[];
        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        };
        $scope.getProcessData=function()
        {
            addProcessService.getProcessDetail().then(function(result){

                $scope.getProcess=result.data;


            });

        };
        $scope.getProcessData();

        $scope.Edit=function(data)
        {

            $scope.process= data;


        };
        $scope.close=function()
        {
            $scope.process='';

        }

    }

})();