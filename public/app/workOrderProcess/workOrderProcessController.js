/**
 * Created by CSS on 16-08-2016.
 */
(function(){

    angular.module('myApp').controller('workOrderProcessController',workOrderProcessController);

    workOrderProcessController.$inject = [
        '$scope',
        'workOrderProcessService',
        'itemEntryService',
        'addEmployeeService',
        'addProcessService',
        '$window'
    ];

    function workOrderProcessController($scope,workOrderProcessService,itemEntryService,addEmployeeService,addProcessService,$window) {
        $scope.getIteam=[];
        $scope.workOrderData = [];
        $scope.employeeData = [];
        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        };

        $scope.getItemData=function()
        {
            itemEntryService.getIteamDetail().then(function(result){

                $scope.getIteam=result.data;


            });

        };
        $scope.getItemData();

        $scope.getProcessData=function()
        {
            addProcessService.getProcessDetail().then(function(result){

                $scope.getProcess=result.data;


            });

        };
        $scope.getProcessData();


        $scope.selectedItemChanged=function(data) {

         angular.forEach($scope.getIteam,function(value,index){

             if(data.itemcode==value.IteamCode)
             {
               $scope.workorder.Qty=value.Qty;
               $scope.workorder.location=value.location;
                 $scope.workorder.purchaseBy=value.purchaseBy;
                 $scope.workorder.invoiceNo=value.invoiceNo;

             }

         });
            angular.forEach($scope.getProcess,function(value,index){

                if(data.itemcode==value.ItemCode)
                {
                    $scope.workorder.Status=value.Status;

                }else
                {
                    $scope.workorder.Status='';

                }

            });



     };

        $scope.saveWorkOrder=function()
        {

            workOrderProcessService.addWorkOrderDetail().then(function(result){

                $scope.getWorkOrder=result.data;


            });

        };

        $scope.editWorkOrderData = function (data) {

            $scope.workorder = data;

        };

        function getWorkOrderData() {
            workOrderProcessService.getWorkOrderData().then(function (result,err) {
                if(err){
                    console.log("Error--->"+err);
                }else{
                    $scope.workOrderData = result.data;
                }

            });
        }

        function getEmployeeData() {
            addEmployeeService.getEmployeeDetails().then(function (result,err) {
                if(err){
                    console.log("Error--->"+err);
                }else{
                    $scope.employeeData = result.data;
                }

            });
        }

        getWorkOrderData();
        getEmployeeData();

     }
})();