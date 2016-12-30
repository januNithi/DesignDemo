
(function(){

    angular.module('myApp').controller('addMachineController',addMachineController);

    addMachineController.$inject = [
        '$scope',
        'addMachineService',
        '$window'
    ];

    function addMachineController($scope,addMachineService,$window) {

        $scope.machineData=[];


        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        };

        $scope.getMachinedetails=function()
        {
            addMachineService.getMachinedata().then(function(result){

                $scope.machineData=result.data;

            });

        };
        $scope.getMachinedetails();

        $scope.saveMachineData=function(data)
        {
            addMachineService.saveMachineDetails(data).then(function(result){

                $scope.machineData=result.data;
                $scope.getMachinedetails();
                $scope.machine='';
                alert('Successfully Registerd !!!!');

            });

        };
        $scope.delete=function(data)
        {
            addMachineService.deleteMachineData(data).then(function(result){
                alert('Successfully Deleted !!!!');
                $scope.getMachinedetails();

            });

        };
        $scope.Edit=function(data)
        {

            $scope.machine= data;


        };
        $scope.close=function()
        {
            $scope.machine='';

        }


    };


})();