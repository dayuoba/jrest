var API = require('../api/router.json');
var notFound = require('./404');
var restFul = require('./restFul');
module.exports = function(url, res) {
	for (var method in API) {
		if (!API[method][url.path]) return notFound(res);
		restFul[method][url.path](url, res);
	}
};