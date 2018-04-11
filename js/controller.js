(function(){
    var app =angular.module('loginApp',['ngRoute']);

    app.config(['$routeProvider' ,function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "login.html"
        })
        .when("/index", {
            templateUrl : "/index.html"
        });
    }]);
    app.controller('loginCtrl', function($scope, $location){
        $scope.submit=function(){
            var emailadd=$scope.emailaddress;
            var password=$scope.password;

            $scope.checkLogin(emailadd, password);
            //if($scope.emailaddress=='admin' && $scope.password =='admin'){
                //$location.path('/index.html')

            //    console.log(1)
            //}
        }
        $scope.checkLogin = function (uname , pass) {
            var userInfo = { username: uname, password: pass };
            $http.post('http://13.75.89.123/pooling/api/Auth/login', userInfo).then(
                function (response) {
                    console.log(response.data.tokenString);
                    $location.path('/index.html')
                }, function (error) {
                    console.log(error.statusText);
                })
        }

    });
});


// var app = angular.module('loginApp', ['ngRoute']);

// app.config(function($routeProvider){
//     $routeProvider
//     .when('/', {
//         templateUrl:'login.html'
//     })
//     .when('/index.html',{
//         templateUrl:'index.html'
//     })
//     .otherwise({
//         redirectTo:'/'
//     });
// });

// app.controller('loginCtrl', function($scope){
//     $scope.submit =function(){
//         var emailadd = $scope.emailaddress;
//         var password = $scope.password;

//         if($scope.emailaddress =='admin' &&$scope.password =='admin'){
//             $location.path('/index.html')
//         }
//     };
// });