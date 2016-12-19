/**
 * Created by Administrator on 29.09.2016.
 */

(function(){
    angular
        .module("myApp")
        .factory("loginService",loginService);

    loginService.$inject=[
        '$http'
    ];

    function loginService($http){
        return{
            }
        }

})();