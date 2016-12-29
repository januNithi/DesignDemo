(function(){

    angular.module('myApp').controller('itemEntryController',itemEntryController);

    itemEntryController.$inject = [
        '$scope',
        'itemEntryService',
        '$window'
    ];

    function itemEntryController($scope,itemEntryService,$window) {
        $scope.item='';
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
        
        $scope.saveItem=function(data){

            itemEntryService.addIteamDetail(data).then(function(result){

                alert('Successfully Added!!!!!');
                $scope.iteam='';
                $scope.getItemData();

            });
            
        };
        $scope.delete=function(data)
        {
            itemEntryService.deleteItemData(data).then(function(result){
                alert('Successfully Deleted !!!!');
                $scope.getItemData();

            });

        };

       $scope.Edit=function(data)
        {
            $scope.iteam=data;

        };
        $scope.close=function()
        {
            $scope.iteam='';

        };

    }

})();