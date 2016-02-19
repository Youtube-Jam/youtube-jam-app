var app = angular.module('app', ['ionic']);

app.config(function($ionicConfigProvider) {

	$ionicConfigProvider.backButton.text('')

});

app.controller('HomeController', function($scope, $rootScope) {

	$rootScope.showPlayer = true;

});

app.controller('AddVideoController', function($scope) {

	$scope.$on('$ionicView.beforeEnter', function() {

		var headerBars = document.querySelectorAll('ion-header-bar');

		for(var i = 0; i < headerBars.length; i++) {

			angular.element(headerBars[i]).addClass('grey-bar');

		};

	});

	$scope.$on('$ionicView.beforeLeave', function() {

		var headerBars = document.querySelectorAll('ion-header-bar');

		for(var i = 0; i < headerBars.length; i++) {

			angular.element(headerBars[i]).removeClass('grey-bar');

		};

	});

});
