"use strict";
(function(){  //jf lets get out of the global scope

	var path = require('path');
	var rootPath = path.normalize(__dirname+ '/../../');
	
	module.exports = {
		development: {
			rootPath:rootPath
			,mongodbServer :'localhost'
			,mongodbName	:'mv'
			,mvdbuser :'mvuser'
			,mvdbpassword :'mvdbpassword-changemeNOW'
			,port : process.env.PORT ||3030	//jf declare port 3030
			,GOOGLE_CLIENT_ID: '933083265450-p2gh8fo1cuj7hmsnvvip5lo55mtniqco.apps.googleusercontent.com'
			,GOOGLE_CLIENT_SECRET: 'FIjAQDO07NleZk1KnbZuI278'
			,TWITTER_consumerKey:  '0P7I8Gda0xYDnwbFJExnCSiiM'  //jf your ClientID HERE
			,TWITTER_consumerSecret: 'mkX3sf4NBRXvsFoHGJ1Ziy1uJrFLh7wd2vOOREq6KO36ZiZ68m'
			,FACEBOOK_CLIENT_ID: '526351797533117'
			,FACEBOOK_CLIENT_SECRET: '1800b92dd761bdf736ea969ad6e5a02b'		
			,LINKEDIN_consumerKey: '778n2ked3r4srn'
			,LINKEDIN_consumerSecret: 'CPwBLAVfHuB1BzW7'	
		},
		production: {
			rootPath:rootPath
			,mongodbServer :'localhost'
			,mongodbName	:'mv'
			,mvdbuser :'mvuser'
			,mvdbpassword :'mvdbpassword-changemeNOW'
			,port : process.env.PORT ||80	//jf declare port 3030
			,GOOGLE_CLIENT_ID: '933083265450-p2gh8fo1cuj7hmsnvvip5lo55mtniqco.apps.googleusercontent.com'
			,GOOGLE_CLIENT_SECRET: 'FIjAQDO07NleZk1KnbZuI278'
			,TWITTER_consumerKey:  '0P7I8Gda0xYDnwbFJExnCSiiM'  //jf your ClientID HERE
			,TWITTER_consumerSecret: 'mkX3sf4NBRXvsFoHGJ1Ziy1uJrFLh7wd2vOOREq6KO36ZiZ68m'
			,FACEBOOK_CLIENT_ID: '526351797533117'
			,FACEBOOK_CLIENT_SECRET: '1800b92dd761bdf736ea969ad6e5a02b'		
			,LINKEDIN_consumerKey: '778n2ked3r4srn'
			,LINKEDIN_consumerSecret: 'CPwBLAVfHuB1BzW7'
		}

	}

})();