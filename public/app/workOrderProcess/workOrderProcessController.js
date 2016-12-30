/**
 * Created by CSS on 16-08-2016.
 */
(function(){

    angular.module('myApp').controller('workOrderProcessController',workOrderProcessController);

    workOrderProcessController.$inject = [
        '$scope',
        'workOrderProcessService',
        'itemEntryService',
        'addProcessService',
        '$window'
    ];

    function workOrderProcessController($scope,workOrderProcessService,itemEntryService,addProcessService,$window) {
        $scope.getIteam=[];
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

        }

     }
})();