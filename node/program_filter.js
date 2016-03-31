module.exports = function(dir, fileext, callback) {
	var fs = require('fs');
	
	fs.readdir(dir, function (err, data) {
    		if(err)
			return callback(err, data);
		
		var filtered = new Array();
		path = require('path');

		fileext = '.' + fileext;

		for(var i = 0; i < data.length; i++) {
			if(fileext == path.extname(data[i])) {
				filtered.push(path.basename(data[i]));
			}
		}
		
		callback(null,filtered);
	});
}
