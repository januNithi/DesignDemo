
var config=require('../config/manager/vrenginners.server.manager');

exports.getEmployee=function(req,res)
{
    config.getEmployeeDetails(function(err,result)
    {

        if(err){
            console.log(err);
            res.send(500,{error:err});
        }else{
            res.send(result);
        }


    });

};


exports.addEmployeeData=function(req,res)
{
    var data=req.body;
    config.employeeDetails(data).then(function(result)
    {
        
        res.send(result);
        
    });
    
};

exports.deleteEmployeeData=function(req,res)
{
    var data=req.body;
    config.deleteEmployeeDetails(data).then(function(result)
    {

        res.send(result);

    });

};


// <-------MACHINE DATA----->


exports.getMachine=function(req,res)
{
    config.getMachineDetails().then(function(result)
    {

        res.send(result);

    });

};


exports.addMachineData=function(req,res)
{
    var data=req.body;
    config.addMachineDetails(data).then(function(result)
    {

        res.send(result);

    });

};

exports.deleteMachineData=function(req,res)
{
    var data=req.body;
    config.deleteMachineDetails(data).then(function(result)
    {

        res.send(result);

    });

};
// <-------MACHINE DATA----->

// <-------ITEAM DATA----->
exports.getIteam=function(req,res)
{
    config.getIteamDetails().then(function(result)
    {

        res.send(result);

    });

};
exports.addIteam=function(req,res)
{
    var data=req.body;
    config.addIteamDetails(data).then(function(result)
    {

        res.send(result);

    });

};
exports.deleteIteam=function(req,res)
{
    var data=req.body;
    config.deleteIteamDetails(data).then(function(result)
    {

        res.send(result);

    });

};
// <-------ITEAM DATA----->

// <-------Process DATA----->

exports.getProcess=function(req,res)
{
    config.getProcessDetails().then(function(result)
    {

        res.send(result);

    });

};

exports.addProcess=function(req,res)
{
    var data=req.body;
    config.addProcessDetails(data).then(function(result)
    {

        res.send(result);

    });

};

exports.deleteProcess=function(req,res)
{
    var data=req.body;
    console.log(data);
    config.deleteProcessDetails(data).then(function(result)
    {

        res.send(result);

    });

};

// <-------Process DATA----->
exports.updateWorkOrderProcess = function (req,res) {
    config.updateWorkProcess(req.body,function(err,result)
    {

        if(err){
            console.log(err);
            res.send(500,{error:err});
        }else{
            res.send(result);
        }


    });
};

exports.deleteWorkOrderProcess = function (req,res) {
    config.deleteWorkProcess(req.body.id,function(err,result)
    {

        if(err){
            console.log(err);
            res.send(500,{error:err});
        }else{
            res.send(result);
        }


    });
};


exports.getWorkOrderProcess = function (req,res) {
    config.getWorkProcess(function(err,result)
    {

        if(err){
            console.log(err);
            res.send(500,{error:err});
        }else{
            res.send(result);
        }


    });
};

// <-------WorkOrder DATA----->

exports.addWorkOrder=function(req,res)
{
    var data=req.body;

    config.addWorkOrderData(data,function(err,result)
    {
        if(err){
            res.send(500,{error:err});
        }else {
            res.send(result);
        }

    });

};

exports.getWorkOrderData = function (req,res) {

    config.getWorkOrderDatas(function(err,result)
    {

        if(err){
            console.log(err);
            res.send(500,{error:err});
        }else{
            res.send(result);
        }


    });
};

exports.deleteWorkOrderData = function (req,res) {
 var data=req.body;
    console.log(data);
    config.deleteWorkOrderDatas(data,function(err,result)
    {

        if(err){
            console.log(err);
            res.send(500,{error:err});
        }else{
            res.send(result);
        }


    });
};
// <-------WorkOrder DATA----->

exports.getMachineReport = function (req,res) {

    config.getMachineReports(req.query.id,function (err,result) {

        if(err){
            console.log(err);
            res.send(500,{error:err});
        }else{
            console.log(result);
            res.send(result);
        }

    });

};