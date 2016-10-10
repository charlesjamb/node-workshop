// ISS latitude and longitude
// npm install request

var request = require('request');

request('http://api.open-notify.org/iss-now.json', function(err, issData) {
	if (err) {
		console.log('error');
	}
	else {
		// console.log(issData);
		var actualValue = JSON.parse(issData.body);
		// console.log(actualValue);
		console.log('The ISS latitude is: ', actualValue.iss_position.latitude.toFixed(2));
		console.log('The ISS longitude is: ', actualValue.iss_position.longitude.toFixed(2));
	}
});
