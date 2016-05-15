var express = require('express'),
  path = require('path');

var CLIENT_PATH = '/client_src';
var app = express();

app.use('/', express.static(path.join(__dirname, CLIENT_PATH)));

var server = app.listen(3000, function(){
  var host = server.address().address,
    port = server.address().port;
    console.log('listenenig %s:%s', host, port);
    console.log(__dirname);
});
