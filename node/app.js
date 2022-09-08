var http = require('http');
var fs = require('fs');
const path = require("path");
var url = require('url');

const htmlFile = path.join(__dirname, "..","html", "Homepage.html");
const winterFile = path.join(__dirname, "..","html", "winter.html");

http.createServer(function (req, res){
	var q = url.parse(req.url, true);
  	var filename = "." + q.pathname;

	fs.readFile(htmlFile,function(err,data){
		res.writeHead(200,  {'Content-Type' : 'text/html'});
		res.write(data);
		res.end();
	});


	fs.readFile(filename, function(err, data) {
    if (err) {
    	if (filename == "/winter") {
      		res.writeHead(404, {'Content-Type': 'text/html'});
      		res.write(filename);
			res.end();
    	}
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);