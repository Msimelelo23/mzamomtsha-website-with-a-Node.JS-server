var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as "Hello World"
   response.end('<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>My Html</title></head><body style="background-color: #f52828;"><h1 style="font-size:50px; color:white; text-align: center; margin-top: 25%; font">This is my first Node JS Server. &hearts;</h1></body></html>');
}).listen(4040);

// Console will print the message
console.log('Server running at http://localhost:4040/');