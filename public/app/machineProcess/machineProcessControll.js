/**
 * Created by CSS on 16-08-2016.
 */
(function(){

    angular.module('myApp').controller('machineProcessController',machineProcessController);

    machineProcessController.$inject = [
        '$scope',
        'machineProcessService',
        'workOrderProcessService',
        'addMachineService',
        'addProcessService',
        '$window'
    ];

    function machineProcessController($scope,machineProcessService,workOrderProcessService,addMachineService,addProcessService,$window) {

        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        }

        $scope.processList = [];
        $scope.editableData = {
            crnt_process : 0,
            nxt_process : 0,
            wrk_ord_no : 0,
            machineId : 0
        };
        $scope.workOrderData = [];

        addProcessService.getProcessDetail().then(function (result,err) {
            if(err){
                console.log(err);
            }else{
                $scope.processList = result.data;
            }
        });

        $scope.editData = function (process) {
            $scope.editableData = process;
        };

        $scope.showData = function () {

            angular.forEach($scope.workOrder,function (value,index) {

                if(value.item_code = $scope.editableData.wrk_ord_no){
                    $scope.editableData.size = value.size;
                }

            });

        };

        $scope.updateWorkOrderProcess = function () {
            $scope.editableData.date = new Date($scope.editableData.date).toISOString();

            machineProcessService.updateWorkProcess($scope.editableData).then(function (result,err) {
                if(err){
                    alert(err);
                }else{
                    alert("Successfully Updated");
                    $scope.editableData = {
                        crnt_process : 0,
                        nxt_process : 0,
                        wrk_ord_no : 0,
                        machineId : 0
                    };
                    getWorkOrderProcess();
                }
            });
        };

        $scope.close = function () {
            $scope.editableData = {
                crnt_process : 0,
                nxt_process : 0,
                wrk_ord_no : 0,
                machineId : 0
            };
        }

        $scope.deleteWorkOrderProcess = function (process) {
            machineProcessService.deleteWorkProcess(process.id).then(function (result,err) {
                if(err){
                    alert(err);
                }else{
                    alert("Successfully Deleted");
                    getWorkOrderProcess();
                }
            });
        };

        var getWorkOrderProcess = function () {

            machineProcessService.getWorkProcess().then(function (result,err) {

                if(err){
                    alert(err);
                }else{
                    $scope.workOrderData = result.data;
                }

            });

        };

        var getWorkOrder = function () {
            workOrderProcessService.getWorkOrderDetails().then(function (result,err) {
                if(err){
                    alert(err);
                }else{
                    $scope.workOrder = result.data;
                }
            });
        };

        var getMachineData = function () {
            addMachineService.getMachinedata().then(function (result,err) {
                if(err){
                    alert(err);
                }else{
                    $scope.machineData = result.data;
                }
            });
        };

        getWorkOrder();
        getMachineData();
        getWorkOrderProcess();

    }

})();