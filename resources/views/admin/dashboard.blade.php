<!DOCTYPE html>
<html lang="en" ng-app="ngApp">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div ng-controller="ctrlApp">
        <h1>Dashboard</h1>
       	<a href="logout">
       		Logout
       	</a>
	</div>
<!-- Angular v1.6.4 -->
<script>
'use strict';
var ngApp = angular.module('ngApp', ['ngResource', 'ngCookies']);

ngApp.controller('ctrlApp', ['$scope', '$http', function($scope, $http) {

}]);

ngApp.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('<%=').endSymbol('%>');
});
</script>
</body>
</html>
