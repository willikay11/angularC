    var app = angular.module('templatesApp', ['ui.router','ngMessages']);

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
            
                $urlRouterProvider.otherwise("/main")
                 
                $stateProvider
                        .state('register', {
                            url: "/register",
                            templateUrl: "templates/register.html",
                            controller: function($scope){
                                $scope.register = function() {
                                    var fname = $scope.firstname;
                                    var sname = $scope.secondname;
                                    var email = $scope.email;
                                    var password = $scope.password;
                                    if(fname!==""){
                                        localStorage.setItem("firstName", fname);
                                        //$scope.firstName = localStorage.getItem("firstName");
                                    }
                                    if(sname!==""){
                                        localStorage.setItem("secondname", sname);
                                        //$scope.secondname = localStorage.getItem("secondname");
                                    }
                                    if(email!==""){
                                        localStorage.setItem("email", email);
                                        //$scope.email = localStorage.getItem("email");
                                    }
                                    if(password!==""){
                                        localStorage.setItem("password", password);
                                        //$scope.password = localStorage.getItem("password");
                                        message = "Registration Successful! ";
                                        alert(message);
                                    }
                                };
                           }
                        })

                        .state('login', {
                            url: "/login",
                            templateUrl: "templates/login.html",
                            controller: function($scope){
                                    $scope.login = function(){
                                    var EnteredEmail = localStorage.getItem("email");
                                    var EnteredPassword = localStorage.getItem("password");

                                    if($scope.email == EnteredEmail && $scope.password == EnteredPassword){
                                        $scope.message =  "Login Successful";
                                    }else{
                                        $scope.message = "Invalid Credentials";
                                    }
                                };
                            }
                        })

                        .state('main',{
                            url: "/main",
                            templateUrl: "templates/main.html"
                        })
            }]);


            app.controller('Controller', ['$scope','serviceName', function($scope, serviceName) {
              $scope.logg = {
                name: serviceName.myFunc(),
                logout: 'logout'
              };
            }])

            app.directive('userName', function() {
              return {
                template: ' {{logg.name}}'
              };
            });

            app.directive('userLogout', function() {
                return{
                    template: ' {{logg.logout}} '
                };
            })

            app.service('serviceName', function() {
                this.myFunc = function () {
                    return localStorage.getItem("firstName");
                }
            });

            app.controller("watch", function($watch){
                    function handleFooChange( newValue, oldValue ) {
                        console.log( "vm.fooCount:", newValue );
                    }
            });

