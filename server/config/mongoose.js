"use strict";
(function(){  //jf lets get out of the global scope

	var	mongoose = require('mongoose');
	// var express	= require('express');
	// var	stylus = require('stylus');
var User = require('../models/userModel');  //jf pullin from ps-oauth
//------------------------Mongoose code



	module.exports = function(config){

		//jf mongoose.connect('mongodb://'+config.ccdbuser+':'+config.ccdbpassword+'@'+config.mongodbServer+'/'+config.mongodbName);
		mongoose.connect('mongodb://'+config.mongodbServer+'/'+config.mongodbName);
		
		var db = mongoose.connection;
		db.on('error', console.error.bind(console,'connection error....'));
		db.once('open',function callback(){
			console.log(config.mongodbName+' db opened...');
		});

	/*	var userSchema = mongoose.Schema({
			firstName : String
			,lastName : String
			,username : String
		});


		var User = mongoose.model('User', userSchema);
*/  //jf original joe eames code

		User.find({}, function (err, collection) {
			console.log ('The collection is '+collection);
			if(collection.length === 0) {
				User.create({firstName:'Joe',lastName:'Eames',username:'joe'});
				User.create({firstName:'John',lastName:'Papa',username:'john'});
				User.create({firstName:'Dan',lastName:'Wahlin',username:'dan'});
			}
		});

	}

})();