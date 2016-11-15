//Using only the node.js


// //Get the http and File system modules
// var http = require('http'),
// 	fs = require('fs');
// //Creating server with the http module
// http.createServer(function(req, res) {
// 	//write to server set configuration for response
// 	res.writeHead(200, {
// 		'Content-Type' : 'text/html',
// 		'Acces-Control-Allow-Origin' : '*'
// 	});

// 	// Grab the index html file using FS
// 	var readStream = fs.createReadStream(__dirname +'/index.html');

// 	//semd the index.html file to user
// 	readStream.pipe(res);
// }).listen(1337)

// //tell whats happening 
// console.log('Up at http://localhost:1337');

// Express version 

var express = require('express');
var app =  express();
var path = require('path');

//Sending HTML to the home page
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

// Start listem the server
app.listen(1337);
console.log('1337 port is on');