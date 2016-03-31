var http = require('http');
var bl = require('bl');
var responses = Array();
var count = 0;

function printResults () {
	for(var i = 0; i < 3; i++) {
		console.log(responses[i]);
	}
}

function httpGet(index) {
	http.get(process.argv[index+2], function callback(response) {
		response.pipe(bl(function(err, data) {
			if(err)
				return console.error(err);

			responses[index] = data.toString();
			count++;
			if(count == 3)
				printResults();
		}));
	});
}

for(var i = 0; i < 3; i++)
	httpGet(i);
