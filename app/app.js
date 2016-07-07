////// <reference path="http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js" />
var app = angular.module('app', []);
app.controller('MainAppCtrl', ['$scope', function ($scope) {
    $scope.double = function (val) {
        return val * 2;
    };
}]);