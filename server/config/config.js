"use strict";
(function(){  //jf lets get out of the global scope

	var path = require('path');
	var rootPath = path.normalize(__dirname+ '/../../');
	
	module.exports = {
		development: {
			rootPath:rootPath,
			mongodbServer :'localhost',
			mongodbName	:'mv',
			mvdbuser :'mvuser',
			mvdbpassword :'mvdbpassword-changemeNOW',
			port : process.env.PORT ||3030	//jf declare port 3030
	
		},
		production: {
			rootPath:rootPath,
			mongodbServer :'localhost',
			mongodbName	:'mv',
			mvdbuser :'mvuser',
			mvdbpassword :'mvdbpassword-changemeNOW',
			port : process.env.PORT ||80	//jf declare port 3030

		}

	}

})();