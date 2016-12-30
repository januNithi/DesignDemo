
(function(){

    angular.module('myApp').factory('addEmployeeservice',addEmployeeservice);

    addEmployeeservice.$inject = [
        '$window',
        '$http'
    ];

    function addEmployeeservice($window,$http) {

        return {


            getEmpDetail: function () {
                return $http({

                    method: 'post',
                    url: '/getEmpData/Data'

                });
            },

            employeeData: function (data) {

                return $http({

                    method: 'post',
                    url: '/addEmployee/data',
                    data: {
                        empId: data.empId,
                        Name: data.Name,
                        Mob: data.Mob,
                        Shift: data.Shift


                    }

                })

            },

            deleteEmployeeData:function(data)
            {
                return $http({

                    method: 'post',
                    url: '/deleteEmployee/data',
                    data: {
                        empId:data.empId
                    }

                })

            }
        }
    }


})();