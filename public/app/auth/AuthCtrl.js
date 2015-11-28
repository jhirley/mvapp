(function(angular) {
//jf	console.log('AuthCtrl.js is loading');



	angular.module('app').factory('AuthCtrl', function ($http, IdentityCtrl, $q){
		return {
			authenticateUser: function(username, password){
				var dfd = $q.defer();
				$http.post('/login', {username:username, password:password}).then(function(response){
					console.log('AuthCtrl username is %s\nAuthCtrl  password is %s\nAuthCtrl response is %s\n', username, password, response);
					console.log(response.data);

					if(response.data.success){
						IdentiryCtrl.currentUser = response.data.user;
						dfd.resolve(true);
						//NotifierCtrl.notify('Successfully Logged in !!');
					} else {
						//NotifierCtrl.notify('Username/Password incorrect!');
						dfd.resolve(false);
					}
				});
				return dfd.promise;
			}
		}
	});
})(window.angular);