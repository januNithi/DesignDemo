
var mysql=require('mysql');
var q=require('q');
var config=require('../db/db.js');

var con = mysql.createConnection(config);


function getEmployeeDetails() {


    var deferred = q.defer();
   var query="select id,empId,Name,Mob,Shift from employee";

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

    var deferred = q.defer();
    console.log(data.id);
    if(data.id==undefined) {

        var query = "insert into employee(empId,Name,Mob,Shift) values('" + data.empId + "','" + data.Name + "','" + data.Mob + "','" + data.Shift + "')";

    }else
    {
       var query="update employee set empId='"+data.empId+"',Name='"+data.Name+"',Mob='"+data.Mob+"',Shift='"+data.Shift+"' where id='"+data.id+"'";

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
    var query="delete from employee where id='"+data.id+"'";

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
    var query="select id,MachineId,Machinemake,MachineName,Description from addmachine";

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

function addMachineDetails(data){

    var deferred = q.defer();
    if(data.id==undefined) {

        var query = "insert into addmachine(MachineId,Machinemake,MachineName,Description) values('" + data.MachineId + "','" + data.Machinemake + "','" + data.MachineName + "','" + data.Description + "')";

    }else
    {
        var query="update addmachine set MachineId='"+data.MachineId+"',Machinemake='"+data.Machinemake+"',MachineName='"+data.MachineName+"',Description='"+data.Description+"' where id='"+data.id+"'";

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
    var query="delete from addmachine where id='"+data.id+"'";

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
    var query="select id,IteamCode,Name,Qty,purchaseBy,invoiceNo,location,shopeName from additeam";

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
    if(data.id==undefined) {

        var query = "insert into additeam(IteamCode,Name,Qty,purchaseBy,invoiceNo,location,shopeName) values('" + data.IteamCode + "','" + data.Name + "','" + data.Qty + "','" + data.purchaseBy + "','" + data.invoiceNo + "','" + data.location + "','" + data.shopeName + "')";

    }else
    {
        var query="update additeam set IteamCode='"+data.IteamCode+"',Name='"+data.Name+"',Qty='"+data.Qty+"',purchaseBy='"+data.purchaseBy+"',invoiceNo='"+data.invoiceNo+"',location='"+data.location+"',shopeName='"+data.shopeName+"' where id='"+data.id+"'";

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
    var query="delete from additeam where id='"+data.id+"'";

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
    var query="select a.IteamCode as ItemCode,b.id,b.ProcessName,b.Status,b.Description from addprocess as b left join additeam as a on a.id=b.id";
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



function addProcessDetails(data){

    var deferred = q.defer();
    if(data.id==undefined) {

        var query = "insert into addprocess(ItemCode,ProcessName,Status,Description ) values('" + data.IteamCode + "','" + data.ProcessName + "','" + data.Status + "','" + data.Description + "')";

    }else
    {
        var query="update addprocess set IteamCode='"+data.IteamCode+"',ProcessName='"+data.ProcessName+"',Status='"+data.Status+"',Description='"+data.Description+"' where id='"+data.id+"'";

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
    addProcessDetails:addProcessDetails
    
};