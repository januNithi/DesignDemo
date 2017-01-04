
(function(){

    angular.module('myApp').factory('machineProcessService',machineProcessService);

    machineProcessService.$inject = [
        '$window',
        '$http'
    ];

    function machineProcessService($window,$http)
    {

        return{

            updateWorkProcess : function (data) {
                return $http.post('/updateWorkOrderProcess',data);
            },
            deleteWorkProcess : function (id) {
                return $http.post('/deleteWorkProcess',{id:id});
            },
            getWorkProcess : function () {
                return $http.get('/getWorkProcess');
            }

        }
    }

})();