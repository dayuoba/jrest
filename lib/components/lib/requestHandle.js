var requestHandle = module.exports = function(app) {
	var parseUrl = require('./parseUrl');
	var model = require('./model');
	var auth = require('./auth');
	var notFound = require('./404');
	var route = require('./route')(app);
	
	return function(req, res) {
		var parsedUrl = parseUrl(req);
		if (!auth(parsedUrl, res)) {
			return notFound(res);
		}
		route(parsedUrl, res);
	}
};
