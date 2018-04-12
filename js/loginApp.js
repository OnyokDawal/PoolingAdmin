var app = angular.module('BasicHttpAuthExample', ['ngStorage']);
app.controller('loginCtrl', function($scope,$localStorage,$sessionStorage,$http) {

    $scope.submit = function(){ 
          $localStorage.username =$scope.emailaddress;
          $localStorage.password =$scope.password;
          

          $scope.checkLogin($localStorage.username, $localStorage.password);

          //if ($localStorage.username == "admin" && $localStorage.password == "admin") {
          //    window.location.href ="index.html";
          //}else{
          //    $localStorage.username = "";
          //    $localStorage.password = "";
          //    alert("Wrong email or password.")
          //}
    }

    $scope.checkLogin = function (uname, pass) {
        var userInfo = { username: uname, password: pass };
        $http.post('http://13.75.89.123/pooling/api/Auth/login', userInfo).then(
            function (response) {
                console.log(response.data.tokenString);
                window.location.href = "index.html";
            }, function (error) {
                console.log(error.statusText);
                $localStorage.username = "";
                $localStorage.password = "";
                alert("Invalid email or password.")
            })
    }

    $scope.isnOTEmpty = function(){
        if($localStorage.username && $localStorage.password){
            window.location.href ="index.html";
        }
    }
    $scope.isnOTEmpty();

});


