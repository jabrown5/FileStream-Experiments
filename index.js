var http = require("http");
var fs = require("fs");
var data = fs.readFileSync("./data.json");

http.createServer(function(req,res) {
	res.writeHead(200);
	res.write(data);
	res.end();
}).listen(3002);