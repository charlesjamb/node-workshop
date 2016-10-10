var prompt = require('prompt');
var request = require('request');

Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }

function distanceTo(coords) {
    var R = 6371e3; // metres
    var φ1 = coords.lat1.toRadians();
    var φ2 = coords.lat2.toRadians();
    var Δφ = (coords.lat2-coords.lat1).toRadians();
    var Δλ = (coords.lon2-coords.lon1).toRadians();

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;
    return d;
};



prompt.get('Where are you right now?', function(err, input) {
	if (err) {
		console.log('Oops there was an error');
	}
	else {
		
		var userInput = input['Where are you right now?'].toLowerCase();

		request('https://maps.googleapis.com/maps/api/geocode/json?address=' + userInput, function(err, result) {
			if (err) {
				console.log('error');
			}
			else {
				var actualValue = JSON.parse(result.body);

				var userLatitude = actualValue.results[0].geometry.location.lat;
				var userLongitude = actualValue.results[0].geometry.location.lng;
				
				request('http://api.open-notify.org/iss-now.json', function(err, issData) {
					if (err) {
						console.log('error');
					}
					else {
						var actualValue = JSON.parse(issData.body);

						var issLatitude = actualValue.iss_position.latitude;
						var issLongitude = actualValue.iss_position.longitude;

						var distance = distanceTo({lat1: userLatitude , lat2: issLatitude , lon1: userLongitude , lon2: issLongitude})
						
						console.log('You are ' + distance.toFixed()/1000 + 'km' + ' from the ISS!');
					}
				});
			}
			
		});

	}
});
	