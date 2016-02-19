var app = angular.module('app', ['ionic']);

app.config(function($ionicConfigProvider) {

	$ionicConfigProvider.backButton.text('')

});

app.controller('HomeController', function($scope, $rootScope, $ionicLoading) {

	$ionicLoading.show();

	$scope.playlist = [];
	var nowPlaying = null;

	$rootScope.showPlayer = true;

	$scope.title = 'Youtube Jam';

	var videosRef = new Firebase('https://youtubejam.firebaseio.com/');

	videosRef.on('value', function(dataSnapshot) {
		console.log('here');
		var data = dataSnapshot.val();
		$scope.playlist = [];
		$rootScope.nowPlaying = null;

		for(var key in data) {

			console.log(data[key]);
			var snapshot = data[key];

			var video = {
				key: key,
				yid: snapshot.id,
				info: snapshot.info
			};

			if(snapshot.status == -1) {
				console.log('add to playlist');
				$scope.playlist.push(video);
				$scope.$apply();
			}else if(snapshot.status == 0) {
				console.log('add to nowPlaying');
				$rootScope.nowPlaying = video;
				$scope.$apply();
			}

		}

		$ionicLoading.hide();

	});

});

app.controller('AddVideoController', function($scope, $rootScope) {

	$rootScope.showPlayer = false;

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
