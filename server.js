var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/nubax');

http.createServer(app).listen(3000, function() {
    console.log("Server running on port 3000");
});
