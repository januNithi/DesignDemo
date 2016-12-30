/**
 * Created by CSS on 16-08-2016.
 */
(function(){

    angular.module('myApp').controller('workOrderProcessController',workOrderProcessController);

    workOrderProcessController.$inject = [
        '$scope',
        'workOrderProcessService',
        'addProcessService',
        '$window'
    ];

    function workOrderProcessController($scope,workOrderProcessService,addProcessService,$window) {

        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        }

        $scope.processList = [];
        $scope.editableData = {
            crnt_process : '0',
            nxt_process : '0'
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

        $scope.updateWorkOrderProcess = function () {
            workOrderProcessService.updateWorkProcess($scope.editableData).then(function (result,err) {
                if(err){
                    alert(err);
                }else{
                    alert("Successfully Updated");
                    $scope.editableData = {};
                }
            });
        };

        $scope.close = function () {
            $scope.editableData = {};
        }

        $scope.deleteWorkOrderProcess = function (process) {
            workOrderProcessService.deleteWorkProcess(process.id).then(function (result,err) {
                if(err){
                    alert(err);
                }else{
                    alert("Successfully Deleted");
                }
            });
        };

        var getWorkOrderProcess = function () {

            workOrderProcessService.getWorkOrderProcess().then(function (result,err) {

                if(err){
                    alert(err);
                }else{
                    $scope.workOrderData = result.data;
                }

            });

        };

    }

})();