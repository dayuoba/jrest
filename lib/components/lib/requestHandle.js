var parseUrl = require('./parseUrl');
var model = require('./model');
var requestHandle = module.exports = function(req, res) {
	var parsedUrl = parseUrl(req);
	res.end(JSON.stringify(parsedUrl));
};