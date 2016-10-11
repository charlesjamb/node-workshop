var prompt = require('prompt');

var randomNum = Math.floor(Math.random()*100);
var list = [];
var count = 0;

function demander() {
	prompt.get('Guess a number between 1 and 100', function(err, input) {
		if (err) {
			console.log('Oops there was an error')
		}
		else {
			var userInput = parseInt(input['Guess a number between 1 and 100']);

			interpreter(userInput);
		}
	})

}

function interpreter(input) {
	list.push(input);
	count += 1;
	if (input === randomNum) {
		console.log('You guessed the right number');
		count = 4;
	}
	else if (input < randomNum && count != 4) {
		console.log('try higher');
	}
	else if (input > randomNum && count != 4) {
		console.log('try lower');
	}
	else if (count = 4) {
		console.log('The number was ' + randomNum + '\n' + 'You tried ' + list);
	}

	if (count < 4) {
		demander();
	}
}

demander();