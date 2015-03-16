var request = require('request');

var Reddit = function() {

	this.getStories = function(after, callback) {

		var baseurl = 'http://www.reddit.com/r/' + this.subreddit + '/' + this.filter + '.json';
		
		if(after != null) {
			baseurl += '?after=' + after;
		}

		request(baseurl, function (error, response, body) {

		  	if (!error && response.statusCode == 200) {
		    	callback(null, JSON.parse(body).data);
		  	}
		});
	}
}

Reddit.prototype.r = function(subreddit) {
	this.subreddit = subreddit;
	return this;
};

var filters = [ 'hot', 'new', 'controversial', 'top' ];

filters.forEach(function (filter) {
  Reddit.prototype[filter] = function(cb) {
    this.filter = filter;
    if (cb) {
      this.exec(cb);
    }
    return this;
  };
});

module.exports = Reddit;
