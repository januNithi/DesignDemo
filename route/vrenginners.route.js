module.exports=function (app) {

    var config=require('../controller/vrenginners.server.controller');
    app.post('/getEmpData/Data',config.getEmployee);
    app.post('/addEmployee/data',config.addEmployeeData);
    app.post('/deleteEmployee/data',config.deleteEmployeeData);

    app.post('/getMachine/Data',config.getMachine);
    app.post('/addMachine/data',config.addMachineData);
    app.post('/deleteMachine/data',config.deleteMachineData);
    
    
    app.post('/getIteam/Data',config.getIteam);
    app.post('/addIteam/Data',config.addIteam);
    app.post('/deleteIteam/Data',config.deleteIteam);

    app.post('/getProcess/data',config.getProcess);
    
};

