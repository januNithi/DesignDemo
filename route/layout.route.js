/**
 * Created by Administrator on 29.09.2016.
 */


module.exports=function(app){
    var layoutCtrl = require('../controller/layout.server.controller');
    app.get("*",layoutCtrl.layout);
};