'use strict';
(function(){  //jf lets get out of the global scope

	var express	= require('express');
	var	stylus = require('stylus');
	var logger = require('morgan');
	var bodyParser = require('body-parser');
	var cookieParser = require('cookie-parser');
	var session = require('express-session');
	var passport = require('passport');
	

	module.exports = function(app, config){

	//------ Stylus Compile-----
			function compile (src,path) {
				return stylus(src).set('filename',path); }
		//------ Stylus Compile-----
	
	
		//----------Express ---------
			//app.configure(function(){  //jf app. configure has been depriciated and is no longer in use
				app.set('view engine' , 'jade');  //jf jade is the view engine
				app.set('views', config.rootPath +'/server/views');	//jf  sets up the views
				app.use(logger('dev'));	//jf https://www.npmjs.com/package/morgan
		//		app.use(logger('combined'));	//jf logs please
		//---Stylus---
				app.use(stylus.middleware({		//jf add stylus
					src: config.rootPath+'/public',
					compile: compile
				}));
				app.use(express.static(config.rootPath+'/public'));	//jf defines a path for static files
		//----cookieParser
				app.use(cookieParser());
				// https://github.com/senchalabs/connect#readme
		//---bodyParser
				app.use(bodyParser.urlencoded({		//jf read body-parser deprecated bodyParser: use individual json/urlencoded middlewares
			  		extended: true
				}));
				//https://www.npmjs.com/package/body-parser
		//------sessions
				app.use(session({secret:'cc carebears rock!',
    				resave: true,
    				saveUninitialized: true
    			}));
				// https://github.com/expressjs/session
				app.use(passport.initialize());
				app.use(passport.session());
				
		//----------Express ---------
	};
})();