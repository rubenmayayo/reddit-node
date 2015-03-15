var express = require('express');
var request = require('request');
var Reddit = require('./lib/reddit');

app = express();	
app.set('views', './views');
app.set('view engine', 'jade');	

app.get('/:subreddit', function(req, res) {

	var subreddit = req.params.subreddit

	new Reddit().top().getStories(subreddit, function(err, stories) {

		if(err) {
			return res.status(500).json({success:false, reason: 'Message'});
		}

		res.render('index', {stories: stories});

	});

})

app.listen(8000, function() {
	console.log('listening on port 8000');
});