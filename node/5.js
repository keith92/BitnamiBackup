var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback (err,list) {
	for(var i = 0; i < list.length; i++) {
		var str = list[i];
		str = path.extname(str);
		str = str.replace('.','');
		if(str == process.argv[3])
			console.log(list[i]);
	}
});
