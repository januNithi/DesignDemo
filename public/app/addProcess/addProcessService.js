
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

            },
            saveProcessData:function(data)
            {

                return $http({

                    method: 'post',
                    url: '/addProcess/data',
                    data:{

                        id:data.id,
                        ItemCode:data.ItemCode,
                        ProcessName:data.ProcessName,
                        Status:data.Status,
                        Description:data.Description

                    }

                })

            }
        
        }
    }

})();