
(function(){

    angular.module('myApp').factory('workOrderProcessService',workOrderProcessService);

    workOrderProcessService.$inject = [
        '$window',
        '$http'
    ];

    function workOrderProcessService($window,$http)
    {

        return{

            updateWorkProcess : function (data) {
                $http.post('/updateWorkOrderProcess',data);
            },
            deleteWorkProcess : function (id) {
                $http.post('/deleteWorkProcess',id);
            },
            getWorkProcess : function () {
                $http.get('/getWorkProcess');
            }

        }
    }

})();