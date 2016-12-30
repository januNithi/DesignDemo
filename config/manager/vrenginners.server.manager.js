
var mysql=require('mysql');
var q=require('q');
var config=require('../db/db.js');

var con = mysql.createConnection(config);


function getEmployeeDetails(cb) {

    var query="select empId,Name,Mob,Shift from employee";

    con.query(query,function(err,result){

        cb(err,result);

    });
};


function employeeDetails(data){

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
    if(data.ItemCode==undefined) {

        var query = "insert into additeam(IteamCode,Name,Qty,purchaseBy,invoiceNo,location,shopeName) values('" + data.IteamCode + "','" + data.Name + "','" + data.Qty + "','" + data.purchaseBy + "','" + data.invoiceNo + "','" + data.location + "','" + data.shopeName + "')";

    }else
    {
        var query="update additeam set IteamCode='"+data.IteamCode+"',Name='"+data.Name+"',Qty='"+data.Qty+"',purchaseBy='"+data.purchaseBy+"',invoiceNo='"+data.invoiceNo+"',location='"+data.location+"',shopeName='"+data.shopeName+"' where ItemCode='"+data.ItemCode+"'";

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
    var query="delete from additeam where ItemCode='"+data.ItemCode+"'";

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
            console.log(result);
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




function addWorkOrderData(data,cb){
    var query = '';
    if(data.id){
        query = "update workorderentry set item_code="+data.item_code+", cus_name = "+data.cus_name+",";
        query += " size='"+data.size+"',process_qty='"+data.process_qty+"',purchase_ord_no = '"+data.purchase_ord_no+"'";
        query += ",date='"+data.date+"',enter_by='"+data.enter_by+"' where data.id = "+data.id;
    }else{
        query = "insert into workorderentry(item_code,cus_name,size,process_qty,purchase_ord_no,";
        query += " date,enter_by) values(";
        query += ""+ data.item_code + ","+data.cus_name+",'" + data.size + "','" + data.process_qty;
        query +=  "','" + data.purchase_ord_no + "','"+data.date+"','"+data.enter_by+"')";
    }
    // var query = 'Update workorderentry set status = "Completed" where id = '+data.id;
    con.query(query,function (err,result) {
       cb(err,result);
    });

};

function getWorkOrderData(cb) {
    var query="Select w.item_code,w.cus_name,w.size,w.process_qty,w.purchase_ord_no,w.date,w.enter_by,";
    query += " a.Qty,a.location,p.Status";
    query += " from workorderentry as w left join additeam as a on a.IteamCode = w.item_code left join addprocess as p";
    query += " on p.itemCode = w.item_code";
    con.query(query,function(err,result){

        cb(err,result);

    });
}


function deleteWorkOrderData(id,cb) {

    var query="delete from workorderentry where id = "+id;

    con.query(query,function(err,result){

        cb(err,result);

    });
};


function updateWorkProcess(data,cb) {

    var query = 'Update workorderentry set status = "Completed" where id = '+data.id;

    con.query(query,function(err,result){

        if(err){
            cb(err,result);
        }else {
            query = "Insert into work_process(wrk_ord_no,size,ok_qty,rjct_qty,nxt_process,crnt_process,date) values";
            query += "('"+data.wrk_ord_no+"','"+data.size+"','"+data.ok_qty+"','"+data.rjct_qty+"',"+data.nxt_process+",";
            query += ""+data.crnt_process+",'"+data.date+"'";
            con.query(query,function(err,result){

                cb(err,result);

            });
        }


    });
};

function getWorkProcess(cb) {
    var query="Select w.item_code,w.cus_name,w.size,w.process_qty,w.purchase_ord_no,w.date,w.enter_by,";
    query += " a.Qty,a.location,p.Status";
    query += " from workorderentry as w left join additeam as a on a.IteamCode = w.item_code left join addprocess as p";
    query += " on p.itemCode = w.item_code";

    con.query(query,function(err,result){

        cb(err,result);

    });
};

function getMachineReport(id,cb) {
    var query = "Select m.machineId,m.machineMake,m.machineName,m.Description,";
    query += " w.wrk_ord_no,w.size,w.ok_qty,w.rjct_qty,w.nxt_process,w.crnt_process,w.date,w.status";
    query += " from addmachine as m inner join work_process";
    query += " as w on w.machineId=m.MachineId where m.MachineId = "+id;

    con.query(query,function(err,result){

        cb(err,result);

    });
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

    addWorkOrderData:addWorkOrderData,
    getWorkOrderData:getWorkOrderData,

    updateWorkProcess:updateWorkProcess,
    deleteWorkProcess:deleteWorkProcess,
    getWorkProcess:getWorkProcess,

    getMachineReport:getMachineReport
};