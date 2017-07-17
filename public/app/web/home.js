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
eval("'use strict';\r\nvar ngApp = angular.module('ngApp', ['ngResource', 'ngAnimate']);\r\n\r\nngApp.controller('ctrlApp', ['$scope', '$http', function($scope, $http) {\r\n\r\n    $scope.usrLogin = function(usr){\r\n    \t$http({\r\n            method: 'POST',\r\n            url: \"login_c\",\r\n            headers: {\r\n            \t'Content-Type': undefined\r\n            },\r\n            data: {user : usr},\r\n            transformRequest: function (data) {\r\n                var fd = new FormData();\r\n                fd.append('user', angular.toJson(data.user));\r\n                return fd;\r\n            }\r\n        }).then(function(result){\r\n            $scope.msg = result.data;\r\n            console.log($scope.msg);\r\n            // if($scope.msg['has_error'] == true){\r\n            //     console.log($scope.msg);\r\n            // }else{\r\n            //     // HTTP REDIRECT IN JS\r\n            //     window.location.replace('admin/dashboard');\r\n\r\n            //     // LINK REDIRECT IN JS\r\n            //     // window.location.href = 'profile';\r\n            // }\r\n            \r\n        });\r\n    }\r\n\r\n    $scope.usrRegister = function(usr){\r\n        $http({\r\n            method: 'POST',\r\n            url: \"register\",\r\n            headers: {'Content-Type': undefined},\r\n            data: {user : usr},\r\n            transformRequest: function (data) {\r\n                var fd = new FormData();\r\n                fd.append('user', angular.toJson(data.user));\r\n                return fd;\r\n            }\r\n        }).then(function(result){\r\n            $scope.msg = result.data;\r\n            console.log($scope.msg);\r\n            // window.location.replace('admin/dashboard');\r\n        });\r\n    }\r\n}]);\r\n\r\nngApp.config(function($interpolateProvider){\r\n    $interpolateProvider.startSymbol('<%=').endSymbol('%>');\r\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3dlYi9ob21lLmpzPzI0NDAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG52YXIgbmdBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbmdBcHAnLCBbJ25nUmVzb3VyY2UnLCAnbmdBbmltYXRlJ10pO1xyXG5cclxubmdBcHAuY29udHJvbGxlcignY3RybEFwcCcsIFsnJHNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCkge1xyXG5cclxuICAgICRzY29wZS51c3JMb2dpbiA9IGZ1bmN0aW9uKHVzcil7XHJcbiAgICBcdCRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogXCJsb2dpbl9jXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXHQnQ29udGVudC1UeXBlJzogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHt1c2VyIDogdXNyfSxcclxuICAgICAgICAgICAgdHJhbnNmb3JtUmVxdWVzdDogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgZmQuYXBwZW5kKCd1c2VyJywgYW5ndWxhci50b0pzb24oZGF0YS51c2VyKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgICAgICRzY29wZS5tc2cgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm1zZyk7XHJcbiAgICAgICAgICAgIC8vIGlmKCRzY29wZS5tc2dbJ2hhc19lcnJvciddID09IHRydWUpe1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJHNjb3BlLm1zZyk7XHJcbiAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gSFRUUCBSRURJUkVDVCBJTiBKU1xyXG4gICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2FkbWluL2Rhc2hib2FyZCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIC8vIExJTksgUkVESVJFQ1QgSU4gSlNcclxuICAgICAgICAgICAgLy8gICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ3Byb2ZpbGUnO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS51c3JSZWdpc3RlciA9IGZ1bmN0aW9uKHVzcil7XHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBcInJlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogdW5kZWZpbmVkfSxcclxuICAgICAgICAgICAgZGF0YToge3VzZXIgOiB1c3J9LFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ3VzZXInLCBhbmd1bGFyLnRvSnNvbihkYXRhLnVzZXIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICAgICAgJHNjb3BlLm1zZyA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubXNnKTtcclxuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2FkbWluL2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XSk7XHJcblxyXG5uZ0FwcC5jb25maWcoZnVuY3Rpb24oJGludGVycG9sYXRlUHJvdmlkZXIpe1xyXG4gICAgJGludGVycG9sYXRlUHJvdmlkZXIuc3RhcnRTeW1ib2woJzwlPScpLmVuZFN5bWJvbCgnJT4nKTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvd2ViL2hvbWUuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);