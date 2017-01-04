(function(){

    angular.module('myApp').controller('workOrderEnteryController',workOrderEnteryController);

    workOrderEnteryController.$inject = [
        '$scope',
        'workOrderEnteryService',
        'addMachineService',
        '$window'
    ];

    function workOrderEnteryController($scope,workOrderEnteryService,addMachineService,$window) {
        $scope.table=false;
        $scope.machineDetails = [];
        $scope.machineData = 0;
        $scope.reportData = [];
        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        };

        $scope.goCheck=function()
        {


            workOrderEnteryService.getMachineReport($scope.machineData).then(function (result,error) {

                if(error){
                    console.log(error);
                }
                else {
                    $scope.reportData = result.data;
                    $scope.table=true;
                }

            });
            
        };

        $scope.getMachineDetails=function() {
            addMachineService.getMachinedata().then(function (result,error) {

                if(error){
                    console.log(error);
                }
                $scope.machineDetails = result.data;

            });
        };
        $scope.getMachineDetails();

    }

})();