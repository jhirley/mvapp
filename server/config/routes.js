
"use strict";
(function(){  //jf lets get out of the global scope
var passport = require('passport');

var express = require('express');
var router = express.Router();


var errors = require('./errors');  //jf added this as an error handler from mongo course

	module.exports = function(app, menu){

	//----------Routes-----------

	// route middleware that will happen on every request
		router.use(function(req, res, next) {

		    // log each request to the console
		    console.log(req.method, req.url);

		    // continue doing what we were doing and go to the route
		    next(); 
		});
		
		router.get('/partials/:directory/:file', function (req, res) {
		// app.get('/partials/:directory/:file', function (req, res) {
		  var file = req.params.file,
		      directory = req.params.directory;
	
		      console.log('directory : '+directory);
	
		      console.log('file : '+file);
		
		  	res.render('../../public/app/' + req.params.directory + '/' + req.params.file,{
	//jf			mongoMessage: mongoMessage,
				menu: menu
			});
		});
	
	/*
		app.get('/partials/*', function(req,res) {
			var dumling = req.params;
			console.log(dumling);
			//console.log(req)
			res.render('../../public/app/' + req.params);
		});
	*/
		router.post('/login', function (req, res, next) {
		// app.post('/login', function (req, res, next) {
			passport.authenticate('local', function (err, user, info) {
				console.log('routes app.post error is %s\nroutes app.post User is %s\n', err, user);
				if(err) {return next(err);}
				
				if(!user){res.send({success:false});}
				
				req.logIn(user, function (err){
					if (err) {return next (err);}
					res.send({success:true, user: user});
				});
			})(req, res, next);
		});

			// auth(req, res, next);
	//	});

		router.get('*', function(req, res ){
		// app.get('*', function(req, res ){
			res.render('index',{
	//jf			mongoMessage: mongoMessage,
				menu: menu
			});
		});

app.use('/', router);

		errors(app);  //jf check for errors
	}

})();