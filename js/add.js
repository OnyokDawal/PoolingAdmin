var app = angular.module('employeeAdd', []);
app.controller('employeeCtrl', function($scope, $http) {
   $scope.AddEmployee=function()
   {
       PlayerService.AddEmployeeToAPI($scope.employee)
   }
})
.factory("EmployeeService",['$http',function($http){
    var fac={};

    fac.AddEmployeeToAPI=function(employee){
        $http.post("http://13.75.89.123/api/User", employee)
        .success(function(response){
            alert(response.status);
        })
    }
    return fac;
}])