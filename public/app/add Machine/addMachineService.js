
(function(){

    angular.module('myApp').factory('addMachineService',addMachineService);

    addMachineService.$inject = [
        '$window',
        '$http'
    ];
    
    function addMachineService($window,$http) {

        return {

            getMachinedata: function () {
                return $http({

                    method: 'post',
                    url: '/getMachine/Data'


                });


            },

            saveMachineDetails: function (data) {
                return $http({

                    method: 'post',
                    url: '/addMachine/data',
                    data: {
                        id: data.id,
                        MachineId: data.MachineId,
                        Machinemake: data.Machinemake,
                        MachineName: data.MachineName,
                        Description: data.Description


                    }

                })


            },

            deleteMachineData: function (data) {
                return $http({

                    method: 'post',
                    url: '/deleteMachine/data',
                    data: {
                        id: data.id
                    }

                })
            }
        }
    }


})();