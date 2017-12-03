angular.module('appRoutes',['ngRoute'])
.config(function($routeProvider,$locationProvider){

    $routeProvider.when('/',{
        templateUrl:'app/views/pages/sort.html',
        controller:'regCtrl',
        controllerAs:'register'
    });

    $locationProvider.html5Mode({
        enable:true,
        requireBase:false
    });

});