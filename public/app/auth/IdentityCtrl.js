//IdentityCtrl.js
(function(angular) {
    console.log('IdentityCtrl.js is loading');

    angular.module('app').factory('IdentityCtrl', function(ToastrCtrl) {
        return {currentUser: undefined,
            isAuthenticated: function() {
                return !!this.currentUser;
            }
        };
    });
})(window.angular);