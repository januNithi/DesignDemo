
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
                      itemcode:data.itemcode,
                      Qty:data.Qty,
                      location:data.location,
                      invoiceNo:data.invoiceNo,
                      cusName:data.cusName,
                      size:data.size,
                      processQuty:data.processQuty,
                      entrollby:data.entrollby,
                      date:data.date
                  }


              });

            },
            getWorkOrderData:function () {
                return $http.get('/getWorkOrderData');
            }

        }
    }

})();