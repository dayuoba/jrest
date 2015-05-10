var API = require('../api/router.json');
var notFound = require('./404');
var restFul = require('./restFul');
module.exports = function(url, res) {

	for (var method in API) {
		if (!API[method][url.path]) return notFound(res);
		console.log(restFul);
		console.log('hhh')
		restFul[method][url.path](url, res);
		//res.end('hello world')
	}
};