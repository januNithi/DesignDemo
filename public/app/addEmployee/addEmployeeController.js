/**
 * Created by CSS on 16-08-2016.
 */
(function(){

    angular.module('myApp').controller('addEmployeeController',addEmployeeController);

    addEmployeeController.$inject = [
        '$scope',
        'addEmployeeservice',
        '$window'
    ];

    function addEmployeeController($scope,addEmployeeservice,$window) {
        
      $scope.shiftData=['DAY SHIFT','NIGHT SHIFT'];
        $scope.getEmpData=[];
        $scope.emp=[];
        $scope.empdata=[];
        $scope.curpage = 1;
        $scope.itemspage = 10;
        $scope.filteredDoc = [];
        $scope.maxSize = 4;
        $scope.totalItems = 0;
        
        
        $scope.goToDashboard=function()
        {
            $window.location.href='/dashboard';

        };

        $scope.getEmployeeData=function()
        {
            addEmployeeservice.getEmpDetail().then(function(result){
                
                $scope.getEmpData=result.data;
                $scope.totalItems = $scope.getEmpData.length;
                $scope.$watch('curpage + itemspage', function() {
                    var begin = (($scope.curpage - 1) * $scope.itemspage),
                        end = begin + $scope.itemspage;
                    $scope.filteredDoc = $scope.getEmpData.slice(begin, end);
                });

            });

        };
        $scope.getEmployeeData();
        
        
        $scope.saveEmployee=function(data){
            addEmployeeservice.employeeData(data).then(function(result){

                console.log(result);
               alert('Successfully Registered !!!!');
                $scope.getEmployeeData();
                $scope.emp='';

                
            },function(err){
                alert(err)
            });
            
            
        };

        $scope.Edit=function (data) {
            $scope.emp=data;

        };

        $scope.delete=function(data)
        {
            addEmployeeservice.deleteEmployeeData(data).then(function(result){
                alert('Successfully Deleted !!!!');
                $scope.getEmployeeData();

            });

        };

        $scope.close=function()
        {
            $scope.emp='';

        }
    }


})();