var express = require('express'),
    logger = require('morgan')('dev'),
    server = express();


//Static Ass like HTML, JS, and CSS
server.use(express.static(__dirname+'/public'));
//Setup Logging
server.use(logger);

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root:__dirname})
});

server.listen(8080, function(){
  console.log("May the Force Be With You...");
});
