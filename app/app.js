'use strict';

var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        template: '<div navigation-bar></div>',
    }).when('/list', {
        template: '<div list></div>'
    }).when('/account', {
        template: '<div account></div>'
    }).otherwise({
        redirectTo: '/home'
    });
});