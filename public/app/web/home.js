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
eval("'use strict';\r\nvar ngApp = angular.module('ngApp', ['ngResource', 'ngAnimate']);\r\n\r\nngApp.controller('ctrlApp', ['$scope', '$http', function($scope, $http) {\r\n    $scope.usrLogin = function(usr){\r\n    \t$http({\r\n            method: 'POST',\r\n            url: \"login_c\",\r\n            headers: {\r\n            \t'Content-Type': undefined\r\n            },\r\n            data: {user : usr},\r\n            transformRequest: function (data) {\r\n                var fd = new FormData();\r\n                fd.append('user', angular.toJson(data.user));\r\n                return fd;\r\n            }\r\n        }).then(function(result){\r\n            $scope.msg = result.data;\r\n            console.log($scope.msg);\r\n            // if($scope.msg['has_error'] == true){\r\n            //     console.log($scope.msg);\r\n            // }else{\r\n            //     // HTTP REDIRECT IN JS\r\n            //     window.location.replace('admin/dashboard');\r\n\r\n            //     // LINK REDIRECT IN JS\r\n            //     // window.location.href = 'profile';\r\n            // }\r\n            \r\n        });\r\n    }\r\n\r\n    $scope.usrRegister = function(usr){\r\n        $http({\r\n            method: 'POST',\r\n            url: \"register\",\r\n            headers: {'Content-Type': undefined},\r\n            data: {user : usr},\r\n            transformRequest: function (data) {\r\n                var fd = new FormData();\r\n                fd.append('user', angular.toJson(data.user));\r\n                return fd;\r\n            }\r\n        }).then(function(result){\r\n            $scope.msg = result.data;\r\n            console.log($scope.msg);\r\n            // window.location.replace('admin/dashboard');\r\n        });\r\n    }\r\n}]);\r\n\r\nngApp.config(function($interpolateProvider){\r\n    $interpolateProvider.startSymbol('<%=').endSymbol('%>');\r\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3dlYi9ob21lLmpzPzI0NDAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG52YXIgbmdBcHAgPSBhbmd1bGFyLm1vZHVsZSgnbmdBcHAnLCBbJ25nUmVzb3VyY2UnLCAnbmdBbmltYXRlJ10pO1xyXG5cclxubmdBcHAuY29udHJvbGxlcignY3RybEFwcCcsIFsnJHNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCkge1xyXG4gICAgJHNjb3BlLnVzckxvZ2luID0gZnVuY3Rpb24odXNyKXtcclxuICAgIFx0JGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBcImxvZ2luX2NcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcdCdDb250ZW50LVR5cGUnOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YToge3VzZXIgOiB1c3J9LFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZkID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmZC5hcHBlbmQoJ3VzZXInLCBhbmd1bGFyLnRvSnNvbihkYXRhLnVzZXIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICAgICAgJHNjb3BlLm1zZyA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubXNnKTtcclxuICAgICAgICAgICAgLy8gaWYoJHNjb3BlLm1zZ1snaGFzX2Vycm9yJ10gPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygkc2NvcGUubXNnKTtcclxuICAgICAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBIVFRQIFJFRElSRUNUIElOIEpTXHJcbiAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnYWRtaW4vZGFzaGJvYXJkJyk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgLy8gTElOSyBSRURJUkVDVCBJTiBKU1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAncHJvZmlsZSc7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnVzclJlZ2lzdGVyID0gZnVuY3Rpb24odXNyKXtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IFwicmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiB1bmRlZmluZWR9LFxyXG4gICAgICAgICAgICBkYXRhOiB7dXNlciA6IHVzcn0sXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVJlcXVlc3Q6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIGZkLmFwcGVuZCgndXNlcicsIGFuZ3VsYXIudG9Kc29uKGRhdGEudXNlcikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgICAgICAkc2NvcGUubXNnID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5tc2cpO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnYWRtaW4vZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1dKTtcclxuXHJcbm5nQXBwLmNvbmZpZyhmdW5jdGlvbigkaW50ZXJwb2xhdGVQcm92aWRlcil7XHJcbiAgICAkaW50ZXJwb2xhdGVQcm92aWRlci5zdGFydFN5bWJvbCgnPCU9JykuZW5kU3ltYm9sKCclPicpO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy93ZWIvaG9tZS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);