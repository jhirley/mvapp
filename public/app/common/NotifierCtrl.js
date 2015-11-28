// NotifierCtrl.js

(function(angular) {
	console.log('NotifierCtrl.js is loading');



	angular.module('app').value('ToastrCtrl', toastr);

	angular.module('app').factory('NotifierCtrl', function(ToastrCtrl){
		return { notify: function(msg){
				ToastrCtrl.success(msg);
				console.log('NotifierCtrl Message is %s\n', msg);
			}
		}
	});

})(window.angular);