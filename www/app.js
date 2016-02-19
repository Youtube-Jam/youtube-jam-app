var app = angular.module('app', ['ionic']);

app.controller('MainController', function($scope) {
	
	$scope.playlist = [];
	var nowPlaying = null;

	$scope.title = 'Youtube Jam';

	var videosRef = new Firebase('https://youtubejam.firebaseio.com/');

	videosRef.on('value', function(dataSnapshot) {
		console.log('here');
		var data = dataSnapshot.val();
		$scope.playlist = [];
		$scope.nowPlaying = null;

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
				$scope.nowPlaying = video;
				$scope.$apply();
			}
		
		}

	});
	
});