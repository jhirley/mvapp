(function(angular) {
    //jf    console.log('AuthCtrl.js is loading');

    angular.module('app').controller('NavbarAuthCtrl', function ($scope, $http, IdentityCtrl, NotifierCtrl, AuthCtrl) {
        $scope.identiry = IdentityCtrl;
        $scope.signin = function(username, password) {
            //jf            console.log('login function');
            AuthCtrl.authenticateUser(username, password).then(function(success) {
                if (success) {
                    NotifierCtrl.notify('Successfully Logged in !!');
                } else {
                    NotifierCtrl.notify('Username/Password incorrect!');
                }
            });
        };
    });
})(window.angular);