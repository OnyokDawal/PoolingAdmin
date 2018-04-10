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

            if($scope.emailaddress=='admin' && $scope.password =='admin'){
                $location.path('/index.html')

                console.log(1)
            }
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