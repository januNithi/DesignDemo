
(function(){

    angular.module('myApp').factory('workOrderEnteryService',workOrderEnteryService);

    workOrderEnteryService.$inject = [
        '$window',
        '$http'
    ];

    function workOrderEnteryService($window,$http)
    {

        return{

            getMachineReport : function (id) {
                return $http.get('/getMachineReport?id='+id);
            }
        }
    }

})();