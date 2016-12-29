
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

        $scope.saveProcess=function(data){
            addEmployeeservice.saveProcessData(data).then(function(result){
                
                alert('Successfully Registered !!!!');
                $scope.getProcessData();
                $scope.process='';
                


            },function(err){
                alert(err)
            });


        };

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