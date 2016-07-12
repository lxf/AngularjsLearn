////// <reference path="http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js" />
var app = angular.module('app', []);
app.controller('MainAppCtrl', ['$scope', 'notify', function ($scope, notify) {
    $scope.double = function (val) {
        return val * 2;
    };

    $scope.productname = "hello";

    $scope.callNotify = function (params) {
        notify(params);
    };
}]).
    factory('notify', ['$window', function (win) {
        var msgs = [];
        return function (msg) {
            msgs.push(msg);
            if (msgs != undefined && msgs.length == 3) {
                win.alert(msgs.join('\n'));
                msgs = [];
            }
        };
    }]);