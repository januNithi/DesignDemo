
(function(){

    angular.module('myApp').factory('itemEntryService',itemEntryService);

    itemEntryService.$inject = [
        '$window',
        '$http'
    ];

    function itemEntryService($window,$http)
    {

        return{
            getIteamDetail:function()
            {   return $http({
                method:'post',
                url:'/getIteam/Data'

            });

            },
            addIteamDetail:function(data)
            {
                return $http({

                    method:'post',
                    url:'/addIteam/Data',
                    data:{
                        IteamCode: data.IteamCode,
                        Name: data.Name,
                        Qty: data.Qty,
                        purchaseBy: data.purchaseBy,
                        invoiceNo: data.invoiceNo,
                        location: data.location,
                        shopeName: data.shopeName
                    }

                });


            },

            deleteItemData:function(data)
            {
            return $http({

                method:'post',
                url:'/deleteIteam/Data',
                data:{
                    IteamCode: data.IteamCode
            }

             });


            }
        }
    }

})();