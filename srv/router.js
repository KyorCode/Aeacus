var path = require('path');
var doT = require('express-dot');
var express = require('express');

exports.CreateNew = function(app){

    app.use(express.static(path.join(__dirname,'./../public')));
    app.set('views',path.join(__dirname,'./views'));
    app.locals.layout = false;
    app.set('view engine','dot');
    app.engine('html',doT.__express);

    app.use('/',function(req,res){
        res.render('index.html');
    });

    app.use(function (err, req, res, next) {
        if (err)
            console.log(err);
        next();
    });

};