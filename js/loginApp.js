var app = angular.module('BasicHttpAuthExample', ['ngStorage']);
app.controller('loginCtrl', function($scope,
    $localStorage,
    $sessionStorage) {

    $scope.submit = function(){ 
          $localStorage.username =$scope.emailaddress;
          $localStorage.password =$scope.password;
          console.log($localStorage.username);
          if($localStorage.username == "admin" && $localStorage.password =="admin"){
              window.location.href ="index.html";
          }else{
              $localStorage.username = "";
              $localStorage.password = "";
              alert("Wrong email or password.")
          }

    }

    $scope.isnOTEmpty = function(){
        if($localStorage.username && $localStorage.password){
            window.location.href ="index.html";
        }
    }
    $scope.isnOTEmpty();

});


