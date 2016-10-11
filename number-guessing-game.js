var prompt = require('prompt');
var alert = require('alerts');

alert('Foo');

var randomNum = Math.floor(Math.random()*100);
var list = [];

prompt.get('Guess a number between 1 and 100', function(err, input) {
	if (err) {
		console.log('Oops there was an error')
	}
	else {
		for (var i = 0; i < 4; i++) {
			var userInput = parseInt(input);
			if (userInput === randomNum) {
				alert('savage');
			}
			else if (userInput < randomNum && i != 3) {
				alert('try higher');
			}
			else if (userInput > randomNum && i != 3) {
				alert('try lower');
			}
			list.push(userInput);
		}
		alert('The number was ' + randomNum + '\n' + 'You tried ' + list);
	}
})



