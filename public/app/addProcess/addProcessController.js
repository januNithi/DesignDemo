
(function(){

    angular.module('myApp').controller('addProcessController',addProcessController);

    addProcessController.$inject = [
        '$scope',
        'addProcessService',
        'itemEntryService',
        '$window'
    ];

    function addProcessController($scope,addProcessService,itemEntryService,$window) {
        $scope.getProcess=[];
        $scope.getIteam=[];
        $scope.process = {
            ItemCode : 0
        };
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


        $scope.getItemData=function()
        {
            itemEntryService.getIteamDetail().then(function(result){

                $scope.getIteam=result.data;


            });

        };
        $scope.getItemData();

        $scope.saveProcess=function(data){
            addProcessService.saveProcessData(data).then(function(result){
                
                alert('Successfully Registered !!!!');
                $scope.getProcessData();
                $scope.process = {
                    ItemCode : 0
                };
                


            },function(err){
                alert(err)
            });


        };

        $scope.delete=function(data)
        {

            addProcessService.deleteProcessDetail(data).then(function(result){

              alert('Delete Successfully');
                $scope.getProcessData();

            });

        };

        $scope.Edit=function(data)
        {

            $scope.process= data;


        };
        $scope.close=function()
        {
            $scope.process = {
                ItemCode : 0
            };

        }

    }

})();