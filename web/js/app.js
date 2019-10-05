const app = angular.module('myApp', ['ngRoute'])
        .controller('LoginController', function ($scope, $location) {
            $scope.username = '';
            $scope.password = '';
            $scope.loginError = false;
            $scope.userList = [];
            $scope.login = function () {

                if (this.username == 'admin' && this.password == '123') {
                    $location.path('/home');
                    this.loginError = false;
                } else {
                    this.loginError = true;
                }
            };
            $scope.save= function(){
                var data = {username: this.username, password: this.password};
                this.userList.push(data);
                this.username = '';
                this.password = '';
            };
            $scope.remove = function(i){
                this.userList.splice(i, 1);
            };
        });
app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'login.html'
            }).when('/home', {
        templateUrl: 'home.html'
    }).when('/register', {
        templateUrl: 'register.html'
    });
});

