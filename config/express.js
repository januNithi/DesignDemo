var express=require('express');

var bodyParser=require('body-parser');

var path=require('path');

var session = require('express-session');

 var mysql=require('mysql');

module.exports=function(){

    var app=express();

    app.use(bodyParser.urlencoded({

        extended:true

    }));
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }));

    app.use(bodyParser.json());

    app.use(express.static('./public'));


    require('../route/vrenginners.route')(app);
    require('../route/layout.route')(app);

    
    return app;
};