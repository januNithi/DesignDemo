
(function(){

    angular.module('myApp').factory('addProcessService',addProcessService);

    addProcessService.$inject = [
        '$window',
        '$http'
    ];

    function addProcessService($window,$http)
    {

        return{
            getProcessDetail:function()
            {

                return $http({

                    method: 'post',
                    url: '/getProcess/data'
                })

            }
        
        }
    }

})();