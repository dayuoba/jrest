module.exports = function(app) {
	var API = require('../api/router.json');
	var notFound = require('./404');
	var restFul = require('./restFul')(app);
	
	return function(url, res) {
				for (var method in API) {
					if (!API[method][url.path]) return notFound(res);
					console.log(restful)
					restFul[method][url.path](url, res);
				}
			};
};

