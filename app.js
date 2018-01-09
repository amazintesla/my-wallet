var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('*', function(req, res, next){
	res.send('This is my default route')
})

var server = app.listen(3000, function(){
	console.log('listening on port', server.address().port)
})

