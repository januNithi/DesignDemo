/**
 * Created by CSS on 16-08-2016.
 */
(function(){

    angular.module('myApp').controller('workOrderProcessController',workOrderProcessController);

    workOrderProcessController.$inject = [
        '$scope',
        'workOrderProcessService',
        'itemEntryService',
        'addEmployeeservice',
        'addProcessService',
        '$window'
    ];

    function workOrderProcessController($scope,workOrderProcessService,itemEntryService,addEmployeeservice,addProcessService,$window) {
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

             if(Number(data.item_code)==value.IteamCode)
             {
               $scope.workorder.Qty=value.Qty;
               $scope.workorder.location=value.location;
                 $scope.workorder.purchaseBy=value.purchaseBy;
                 $scope.workorder.invoiceNo=value.invoiceNo;

             }

         });
            angular.forEach($scope.getProcess,function(value,index){

                if(data.item_code==value.ItemCode)
                {
                    $scope.workorder.Status=value.Status;

                }else
                {
                    $scope.workorder.Status='';

                }

            });



     };
        $scope.close=function()
        {
            $scope.workorder='';

        };

        $scope.delete=function(data)
        {

            workOrderProcessService.deleteWorkOrderDetail(data).then(function(result){

               alert('Successfully Deleted !!!');
                $scope.getWorkOrderData();


            });



        };

        $scope.saveWorkOrder=function(data)
        {
            var date=new Date(data.date).toISOString();

            data.date=date;

            workOrderProcessService.addWorkOrderDetail(data).then(function(result){

                $scope.getWorkOrder=result.data;
                $scope.workorder='';

                alert('Successfully Registerd !!!');
                $scope.getWorkOrderData();


            });

        };

        $scope.editWorkOrderData = function (data) {

            $scope.workorder = data;

        };

        $scope.getWorkOrderData=function() {
            workOrderProcessService.getWorkOrderDetails().then(function (result,err) {
                if(err){
                    console.log("Error--->"+err);
                }else{
                    $scope.workOrderData = result.data;
                }

            });
        };

        $scope.getEmployeeData=function() {
            addEmployeeservice.getEmpDetail().then(function (result,err) {
                if(err){
                    console.log("Error--->"+err);
                }else{
                    $scope.employeeData = result.data;
                }

            });
        };

        $scope.getWorkOrderData();
        $scope.getEmployeeData();

     }
})();