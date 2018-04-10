var app = angular.module('employeeDelete', []);
app.controller('deleteCtrl', function($scope, $http) {
    $scope.deleteAPI = function(){
        $http( angular.merge({}, config || {}, {
            method  : 'delete',
            url     : 'http://13.75.89.123/api/User',
            data    : _data
        }));
    }
    $scope.deleteAPI();

}
);