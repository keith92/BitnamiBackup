var http = require('http');

var server = http.createServer(function(req, res) {
	if(req.method != 'POST')
		return res.end('Not a POST\n');

	var map = require('through2-map');
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	}).pipe(res);
});
server.listen(Number(process.argv[2]));
