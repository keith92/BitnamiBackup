var filterFn = require('./program_filter.js');

filterFn(process.argv[2], process.argv[3], function (err,data) {
	if(err)
		return console.error('error:',err);
	
	for(var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
});
