var app = angular.module('employee', ['angularUtils.directives.dirPagination','ngStorage']);
app.controller('employeeCtrl', function($scope,$http,$localStorage,
    $sessionStorage) {
        
     
        $scope.signOut = function(){    
            $localStorage.username =  "";
            $localStorage.password =  "";
            location.reload();
            // alert();
      }
    
    
    $scope.getAll = function(){        
        $http({
            method:'GET',
            url:'http://13.75.89.123/pooling/api/User'})
            .then(function (userData) {
            $scope.file = userData;
            $scope.current_grid = 1;
            $scope.data_limit = 10;
            $scope.filter_data = $scope.file.length;
            $scope.entire_user = $scope.file.length;           
            $scope.resultAPI = userData.data;
            $scope.currentPage = 0;
            $scope.data = [];
            $scope.q = '';
            $scope.sortColumn = "";
            
            console.log($scope.resultAPI);

   
        });
        $scope.sort = function(keyname){
            $scope.sortKey = keyname;
            $scope.reverse= !$scope.reverse;
        }
    }
    
    $scope.getAll();

    $scope.deleteEmployee = function(userId = 0){ 

        $http.delete('http://13.75.89.123/pooling/api/User/' + userId).then(function (response) {
           console.log('Success');
           location.reload();

        }, function () {
            console.log('Failed');
        }); 

    }

    $scope.linkUrL ="http://13.75.89.123/pooling/api/User/DownloadFile?UserId=";
    $scope.isEmpty = function(){
        delete $localStorage
        if(!$localStorage.username && !$localStorage.password){
            window.location.href ="login.html";
        }
    }
    $scope.isEmpty();



});


