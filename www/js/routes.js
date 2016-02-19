var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
		  controller: 'HomeController',
      templateUrl: 'templates/home.html'
    }).state('add-video', {
      url: '/add-video',
      controller: 'AddVideoController',
      templateUrl: 'templates/add-video.html'
    });

});
