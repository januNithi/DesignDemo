/**
 * Created by Administrator on 29.09.2016.
 */
(function(){
    angular
        .module("myApp")
        .controller("loginController",loginController);

    loginController.$inject=[
        '$scope',
        '$window',
        'loginService'


    ];

    function loginController($scope,$window,loginService){
    $scope.login=function(data) {

        if((data.password == "Admin") &&(data.userName == "Admin")) {

            alert('Successfully login !!!!');
            $scope.data='';

            $window.location.href='/dashboard';
        }
        else{

            alert('Invalid UserName,Password !!!!');
            $scope.data='';

        }
    }
   
    }
})();