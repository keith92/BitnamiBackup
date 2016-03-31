var net = require('net');

function formatDate() {
	var date = Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDate();
	var hours = date.getHours();
	var mins = date.getMinutes();
	var fdate = year+"-"+month+"-"+day+" "+hours+":"+mins;
	return fdate;
}

var server = net.createServer(function  callback(socket) {
	socket.write(formatDate());
	socket.end();
});
server.listen(Number(process.argv[2]));
