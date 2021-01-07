var AdditionApp = angular.module('AdditionApp',[]);
AdditionApp.controller('DemoAddController', function($scope) {
       $scope.a=5;
       $scope.b=6;
       $scope.c=$scope.a + $scope.b;
});
var SubractionApp = angular.module('SubtractionApp',[]);
SubractionApp.controller('DemoSubtractController', function($scope) {
       $scope.a=8;
       $scope.b=6;
       $scope.d=$scope.a - $scope.b;
});