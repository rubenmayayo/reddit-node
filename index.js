var express = require('express');
var request = require('request');
var Reddit = require('./lib/reddit');

app = express();	
app.set('views', './views');
app.set('view engine', 'jade');	

app.get('/r/:subreddit', function(req, res) {

	var subreddit = req.params.subreddit;
	
	after = req.query.after;

	new Reddit().r(subreddit).new().getStories(after, function(err, data) {

		res.render('index', {data: data, subreddit: subreddit});

	});

})

app.listen(8000, function() {
	console.log('Listening on port 8000');
});