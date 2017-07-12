/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
eval("'use strict';\r\nvar ngApp = angular.module('ngApp', ['ngResource']);\r\n\r\nngApp.controller('ctrlApp', ['$scope', '$http', function($scope, $http) {\r\n    $scope.usrLogin = function(usr){\r\n    \t$http({\r\n            method: 'POST',\r\n            url: \"login_c\",\r\n            headers: {\r\n            \t'Content-Type': undefined\r\n            },\r\n            data: {user : usr},\r\n            transformRequest: function (data) {\r\n                var fd = new FormData();\r\n                fd.append('user', angular.toJson(data.user));\r\n                return fd;\r\n            }\r\n        }).then(function(result){\r\n            $scope.msg = result.data;\r\n            \r\n            if($scope.msg['has_error'] == true){\r\n                console.log($scope.msg);\r\n            }else{\r\n                // HTTP REDIRECT IN JS\r\n                window.location.replace('admin/dashboard');\r\n\r\n                // LINK REDIRECT IN JS\r\n                // window.location.href = 'profile';\r\n            }\r\n            \r\n        });\r\n    }\r\n\r\n    $scope.usrRegister = function(usr){\r\n        $http({\r\n            method: 'POST',\r\n            url: \"register\",\r\n            headers: {'Content-Type': undefined},\r\n            data: {user : usr},\r\n            transformRequest: function (data) {\r\n                var fd = new FormData();\r\n                fd.append('user', angular.toJson(data.user));\r\n                return fd;\r\n            }\r\n        }).then(function(result){\r\n            $scope.msg = result.data;\r\n            console.log($scope.msg);\r\n            window.location.replace('admin/dashboard');\r\n        });\r\n    }\r\n}]);\r\n\r\nngApp.config(function($interpolateProvider){\r\n    $interpolateProvider.startSymbol('<%=').endSymbol('%>');\r\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3dlYi9ob21lLmpzPzI0NDAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG52YXIgbmdBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbmdBcHAnLCBbJ25nUmVzb3VyY2UnXSk7XHJcblxyXG5uZ0FwcC5jb250cm9sbGVyKCdjdHJsQXBwJywgWyckc2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwKSB7XHJcbiAgICAkc2NvcGUudXNyTG9naW4gPSBmdW5jdGlvbih1c3Ipe1xyXG4gICAgXHQkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IFwibG9naW5fY1wiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFx0J0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7dXNlciA6IHVzcn0sXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVJlcXVlc3Q6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgndXNlcicsIGFuZ3VsYXIudG9Kc29uKGRhdGEudXNlcikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgICAgICAkc2NvcGUubXNnID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZigkc2NvcGUubXNnWydoYXNfZXJyb3InXSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5tc2cpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIEhUVFAgUkVESVJFQ1QgSU4gSlNcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdhZG1pbi9kYXNoYm9hcmQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBMSU5LIFJFRElSRUNUIElOIEpTXHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdwcm9maWxlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUudXNyUmVnaXN0ZXIgPSBmdW5jdGlvbih1c3Ipe1xyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogXCJyZWdpc3RlclwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6IHVuZGVmaW5lZH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHt1c2VyIDogdXNyfSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtUmVxdWVzdDogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgZmQuYXBwZW5kKCd1c2VyJywgYW5ndWxhci50b0pzb24oZGF0YS51c2VyKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICRzY29wZS5tc2cgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm1zZyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdhZG1pbi9kYXNoYm9hcmQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufV0pO1xyXG5cclxubmdBcHAuY29uZmlnKGZ1bmN0aW9uKCRpbnRlcnBvbGF0ZVByb3ZpZGVyKXtcclxuICAgICRpbnRlcnBvbGF0ZVByb3ZpZGVyLnN0YXJ0U3ltYm9sKCc8JT0nKS5lbmRTeW1ib2woJyU+Jyk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3dlYi9ob21lLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);