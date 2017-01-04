
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
    var query="select p.itemCode as ItemCode,p.id,p.ProcessName,p.Status,p.Description,i.Name as item_name from addprocess as p";
    query += " left join additeam as i on i.IteamCode = p.ItemCode";
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
    if(data.id==undefined) {

        var query = "insert into addprocess(ProcessName,Status,Description,itemCode ) values('" + data.ProcessName + "','" + data.Status + "','" + data.Description + "','" + data.ItemCode + "')";

    }else
    {
        var query="update addprocess set ProcessName='"+data.ProcessName+"',Status='"+data.Status+"',Description='"+data.Description+"',itemCode='"+data.ItemCode+"' where id='"+data.id+"'";

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
    var query="delete from addprocess where id='"+data.id+"'";

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
        query = "update workorderentry set item_code="+data.itemcode+", emp_name = "+data.emp_name+",";
        query += " size='"+data.size+"',process_qty='"+data.process_qty+"',invoiceNo = '"+data.invoiceNo+"'";
        query += ",date='"+data.date+"',enter_by='"+data.entrollby+"' where id = "+data.id;
    }else{
        query = "insert into workorderentry(item_code,emp_name,size,process_qty,invoiceNo,";
        query += " date,enter_by) values(";
        query += ""+ data.itemcode + ","+data.emp_name+",'" + data.size + "','" + data.process_qty;
        query +=  "','" + data.invoiceNo + "','"+data.date+"','"+data.entrollby+"')";
    }
    // var query = 'Update workorderentry set status = "Completed" where id = '+data.id;
    con.query(query,function (err,result) {

       cb(err,result);

    });

};

function getWorkOrderDatas(cb) {

    // var query="Select w.id,w.item_code,w.emp_name,w.size,w.process_qty,w.invoiceNo,w.date,w.enter_by,";
    // query += " a.Qty,a.location,p.Status,e.Name,a.Name as itemName";
    // query += " from workorderentry as w inner join additeam as a on a.IteamCode = w.item_code inner join addprocess as p";
    // query += " on p.itemCode = w.item_code inner join employee as e on e.empId = w.emp_name";

    var query = "Select id,item_code,emp_name,size,invoiceNo,process_qty,date,enter_by,";
    query += " (select Name from additeam where IteamCode = item_code) as itemName,";
    query += " (select Qty from additeam where IteamCode = item_code) as Qty,";
    query += " (select location from additeam where IteamCode = item_code) as location,";
    query += " (select Name from employee where empId = emp_name) as Name from workorderentry";
    console.log(query);
    con.query(query,function(err,result){


        cb(err,result);

    });
}

function deleteWorkOrderDatas(data,cb) {

    var query="delete from workorderentry where id = "+data.id;

    con.query(query,function(err,result){

        cb(err,result);

    });

};

function deleteWorkProcess(id,cb) {

    var query="delete from work_process where id = "+id;

    con.query(query,function(err,result){

        cb(err,result);

    });
};


function updateWorkProcess(data,cb) {

    var query = '';

    if(data.id) {

        query = 'Update work_process set status = "Completed" where id = ' + data.id;

        con.query(query, function (err, result) {

            if (err) {
                cb(err, result);
            } else {
                query = "Insert into work_process(machineId,wrk_ord_no,size,ok_qty,rjct_qty,nxt_process,crnt_process,date) values";
                query += "(" + data.machineId + "," + data.wrk_ord_no + ",'" + data.size + "','" + data.ok_qty + "','" + data.rjct_qty + "'," + data.nxt_process + ",";
                query += "" + data.crnt_process + ",'" + data.date + "')";
                con.query(query, function (err, result) {

                    cb(err, result);

                });
            }


        });
    }else{
        query = "Insert into work_process(machineId,wrk_ord_no,size,ok_qty,rjct_qty,nxt_process,crnt_process,date) values";
        query += "(" + data.machineId + "," + data.wrk_ord_no + ",'" + data.size + "','" + data.ok_qty + "','" + data.rjct_qty + "'," + data.nxt_process + ",";
        query += "" + data.crnt_process + ",'" + data.date + "')";
        con.query(query, function (err, result) {

            cb(err, result);

        });
    }
};

function getWorkProcess(cb) {
    var query="Select w.machineId,w.id,w.wrk_ord_no,w.size,w.ok_qty,w.rjct_qty,w.nxt_process,w.crnt_process";
        query += ",w.date,m.MachineName,(select ProcessName from addprocess where id = w.nxt_process) as nxt_process_name,";
        query += " (select ProcessName from addprocess where id = w.crnt_process) as crnt_process_name";
        query += " from work_process as w left join addmachine as m on w.machineId=m.MachineId where status != 'Completed'";

    con.query(query,function(err,result){

        cb(err,result);

    });
};

function getMachineReports(id,cb) {
    console.log(id);
    // var query = "Select m.machineId,m.machineMake,m.machineName,m.Description,";
    // query += " w.wrk_ord_no,w.size,w.ok_qty,w.rjct_qty,w.nxt_process,w.crnt_process,w.date,w.status,";
    // query += " (select ProcessName from addprocess where id = w.nxt_process) as nxt_process_name, ";
    // query += " (select ProcessName from addprocess where id = w.crnt_process) as crnt_process_name from addmachine as m inner join work_process";
    // query += " as w on w.machineId=m.MachineId where m.MachineId = "+id;

    var query = "Select m.machineId,m.machineMake,m.machineName,m.Description, w.wrk_ord_no";
    query += ",w.size,w.ok_qty,w.rjct_qty,w.nxt_process,w.crnt_process,w.date,w.status,";
    query += "(select ProcessName from addprocess where id = w.nxt_process) as nxt_process_name,";
    query += "(select ProcessName from addprocess where id = w.crnt_process) as crnt_process_name";
    query += " from addmachine as m inner join work_process as w on w.machineId=m.MachineId where m.MachineId = "+id;

    con.query(query,function(err,result){
if(err)
{
    console.log(err);
    cb(err,null);

}else{
    console.log(result);
    cb(null,result);

}
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
    getWorkOrderDatas:getWorkOrderDatas,
    deleteWorkOrderDatas:deleteWorkOrderDatas,

    updateWorkProcess:updateWorkProcess,
    deleteWorkProcess:deleteWorkProcess,
    getWorkProcess:getWorkProcess,

    getMachineReports:getMachineReports
};