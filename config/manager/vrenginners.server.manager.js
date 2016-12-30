
var mysql=require('mysql');
var q=require('q');
var config=require('../db/db.js');

var con = mysql.createConnection(config);


function getEmployeeDetails() {


    var deferred = q.defer();
   var query="select empId,Name,Mob,Shift from employee";

    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);

        }

    });
    return deferred.promise;
};


function employeeDetails(data){
 console.log(data);
    var deferred = q.defer();
    if(data.empId==undefined) {

        var query = "insert into employee(Name,Mob,Shift) values('" + data.Name + "','" + data.Mob + "','" + data.Shift + "')";

    }else
    {
       var query="update employee set Name='"+data.Name+"',Mob='"+data.Mob+"',Shift='"+data.Shift+"' where empId='"+data.empId+"'";

    }
    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);
        }

    });

    return deferred.promise;
};


function deleteEmployeeDetails(data) {


    var deferred = q.defer();
    var query="delete from employee where empId='"+data.empId+"'";

    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);

        }

    });
    return deferred.promise;
};




function getMachineDetails() {


    var deferred = q.defer();
    var query="select MachineId,Machinemake,MachineName,Description from addmachine";

    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);
            console.log(result);

        }

    });
    return deferred.promise;
};

function addMachineDetails(data){

    var deferred = q.defer();
    if(data.MachineId==undefined) {

        var query = "insert into addmachine(Machinemake,MachineName,Description) values('" + data.MachineId + "','" + data.Machinemake + "','" + data.MachineName + "','" + data.Description + "')";

    }else
    {
        var query="update addmachine set Machinemake='"+data.Machinemake+"',MachineName='"+data.MachineName+"',Description='"+data.Description+"' where MachineId='"+data.MachineId+"'";

    }
    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);
        }

    });

    return deferred.promise;
};

function deleteMachineDetails(data) {


    var deferred = q.defer();
    var query="delete from addmachine where MachineId='"+data.MachineId+"'";

    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);

        }

    });
    return deferred.promise;
};



function getIteamDetails() {


    var deferred = q.defer();
    var query="select IteamCode,Name,Qty,purchaseBy,invoiceNo,location,shopeName from additeam";

    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);

        }

    });
    return deferred.promise;
};


function addIteamDetails(data){

    var deferred = q.defer();
    if(data.IteamCode==undefined) {

        var query = "insert into additeam(Name,Qty,purchaseBy,invoiceNo,location,shopeName) values('" + data.Name + "','" + data.Qty + "','" + data.purchaseBy + "','" + data.invoiceNo + "','" + data.location + "','" + data.shopeName + "')";

    }else
    {
        var query="update additeam set Name='"+data.Name+"',Qty='"+data.Qty+"',purchaseBy='"+data.purchaseBy+"',invoiceNo='"+data.invoiceNo+"',location='"+data.location+"',shopeName='"+data.shopeName+"' where IteamCode='"+data.IteamCode+"'";

    }
    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);
        }

    });

    return deferred.promise;
};


function deleteIteamDetails(data) {


    var deferred = q.defer();
    var query="delete from additeam where IteamCode='"+data.IteamCode+"'";

    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);

        }

    });
    return deferred.promise;
};



function getProcessDetails() {


    var deferred = q.defer();
    var query="select ItemCode,ProcessName,Status,Description from addprocess";
    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);

        }

    });
    return deferred.promise;
};



function addProcessDetails(data){

    var deferred = q.defer();
    if(data.ItemCode==undefined) {

        var query = "insert into addprocess(ProcessName,Status,Description ) values('" + data.ProcessName + "','" + data.Status + "','" + data.Description + "')";

    }else
    {
        var query="update addprocess set ProcessName='"+data.ProcessName+"',Status='"+data.Status+"',Description='"+data.Description+"' where ItemCode='"+data.ItemCode+"'";

    }
    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);
        }

    });

    return deferred.promise;
};


function deleteProcessDetails(data) {


    var deferred = q.defer();
    var query="delete from addprocess where ItemCode='"+data.ItemCode+"'";

    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);

        }

    });
    return deferred.promise;
};




function addWorkOrderData(data){


    var deferred = q.defer();
    if(data.id==undefined) {

        var query = "insert into addworkorder(ItemCode,stackQty,location,purchaseNo,processStatus,customerName,size,processQty,entrollBy,date) values('" + data.itemcode + "','"+data.Qty+"','" + data.location + "','" + data.invoiceNo + "','" + data.cusName + "','"+data.size+"','"+data.processQuty+"','"+data.entrollby+"','"+data.date+"')";

    }else
    {
        var query="update addworkorder set ItemCode='"+data.ItemCode+"',stackQty='"+data.Qty+"',location='"+data.location+"',processStatus='"+data.invoiceNo+"',customerName='"+data.cusName+"',size='"+data.size+"',processQty='"+data.processQuty+"',entrollBy='"+data.entrollby+"',date='"+data.date+"' where workOrderNo='"+data.workOrderNo+"'";

    }
    con.query(query,function(err,result){

        if(err){

            deferred.reject(err);


        }else
        {

            deferred.resolve(result);
        }

    });

    return deferred.promise;
};






module.exports={

    employeeDetails:employeeDetails,
    getEmployeeDetails:getEmployeeDetails,
    deleteEmployeeDetails:deleteEmployeeDetails,

    getMachineDetails:getMachineDetails,
    addMachineDetails:addMachineDetails,
    deleteMachineDetails:deleteMachineDetails,

    getIteamDetails:getIteamDetails,
    addIteamDetails:addIteamDetails,
    deleteIteamDetails:deleteIteamDetails,

    getProcessDetails:getProcessDetails,
    addProcessDetails:addProcessDetails,
    deleteProcessDetails:deleteProcessDetails,

    addWorkOrderData:addWorkOrderData
    
};