const http = require('http');
var app    = require('./config/express')();
             require('./config/database.js')(); 

var server = http.createServer(app).listen(app.get('port'),function (){
    console.log('Express is running on port now ' + app.get('port'));
});

module.exports = server;