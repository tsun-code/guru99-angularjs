var sampleApp = angular.module('sampleApp', []);
sampleApp.controller('AngularJSController', function ($scope) {
    $scope.ID = 5;
});

var sampleApp2 = angular.module('sampleApp2', []);
sampleApp2.directive('ngGuru99', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>This is AngularJS Testing</h1>'
    };
});