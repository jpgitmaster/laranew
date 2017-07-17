'use strict';
var ngApp = angular.module('ngApp', ['ngResource', 'ngAnimate']);

ngApp.controller('ctrlApp', ['$scope', '$http', function($scope, $http) {

    $scope.usrLogin = function(usr){
    	$http({
            method: 'POST',
            url: "login_c",
            headers: {
            	'Content-Type': undefined
            },
            data: {user : usr},
            transformRequest: function (data) {
                var fd = new FormData();
                fd.append('user', angular.toJson(data.user));
                return fd;
            }
        }).then(function(result){
            $scope.msg = result.data;
            console.log($scope.msg);
            // if($scope.msg['has_error'] == true){
            //     console.log($scope.msg);
            // }else{
            //     // HTTP REDIRECT IN JS
            //     window.location.replace('admin/dashboard');

            //     // LINK REDIRECT IN JS
            //     // window.location.href = 'profile';
            // }
            
        });
    }

    $scope.usrRegister = function(usr){
        $http({
            method: 'POST',
            url: "register",
            headers: {'Content-Type': undefined},
            data: {user : usr},
            transformRequest: function (data) {
                var fd = new FormData();
                fd.append('user', angular.toJson(data.user));
                return fd;
            }
        }).then(function(result){
            $scope.msg = result.data;
            console.log($scope.msg);
            // window.location.replace('admin/dashboard');
        });
    }
}]);

ngApp.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('<%=').endSymbol('%>');
});