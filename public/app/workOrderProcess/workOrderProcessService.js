
(function(){

    angular.module('myApp').factory('workOrderProcessService',workOrderProcessService);

    workOrderProcessService.$inject = [
        '$window',
        '$http'
    ];

    function workOrderProcessService($window,$http)
    {

        return{
            addWorkOrderDetail:function(data)
            {

              return $http({

                  method:'post',
                  url:'/postWorkOrderDetail/data',
                  data:{
                      id:data.id,
                      itemcode:data.item_code,
                      Qty:data.Qty,
                      location:data.location,
                      invoiceNo:data.invoiceNo,
                      emp_name:data.emp_name,
                      size:data.size,
                      process_qty:data.process_qty,
                      entrollby:data.enter_by,
                      date:data.date
                  }


              });

            },
            getWorkOrderDetails:function () {
                return $http({
                    method:'post',
                    url:'/getWorkOrderData/data'

                });
            },
            deleteWorkOrderDetail:function(data){

                return $http({
                    method:'post',
                    url:'/deleteWorkOrderData/data',
                    data:{
                        id:data.id
                    }

                });

            }

        }
    }

})();