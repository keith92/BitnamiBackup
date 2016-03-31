var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	//res.writeHead(200,{'content-type':'text/plain'});
	var filename = process.argv[3];
	fs.createReadStream(filename).pipe(res);
});

server.listen(Number(process.argv[2]));
