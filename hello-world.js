

function write() {
	console.log('Hello, world!');
	setTimeout(function() {
		console.log('Hello, worls!');
	}, 10000);
}

// function writeForever() {
// 	var forever = function(value) {
// 		value = 10;
// 		if (value <= 0) {
// 			console.log('No more hello, worlds!');
// 		} 
// 		else {
// 			write();
// 			return value - 1;
// 		}
// 	}
// }

function writeForever() {
	console.log('Hello, world!');
	setTimeout(writeForever, 5000);
}

writeForever();