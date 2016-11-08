var express = require('express');
var app = express();

//lets port be set by heroku
var port = process.env.PORT || 8080;

//set view engine to ejs
app.set('view engine', 'ejs');

//make express look in public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

//set home page route
app.get('/', function(req, res) {

	//ejs render automatically looks in views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('App is running on http://localhost:' + port);
});