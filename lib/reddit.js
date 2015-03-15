var request = require('request');

var Reddit = function() {

	this.stories = [];
	this.method = 'hot'
	this.getStories = function(subreddit, callback) {

		request('http://www.reddit.com/r/' + subreddit + '/' + this.method + '.json', function (error, response, body) {
		  if (!error && response.statusCode == 200) {

		  	stories = JSON.parse(body).data.children;

		    callback(null, stories); // Show the HTML for the Google homepage. 
		  }
		});

	}
}

Reddit.prototype.top = function() {
	this.method = 'top';
	return this;
}

Reddit.prototype.hot = function() {
	this.method = 'hot';
	return this;
}

Reddit.prototype.new = function() {
	this.method = 'new';
	return this;
}

module.exports = Reddit;
