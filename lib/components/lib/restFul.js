var API = require('../api/router.json');
var restFul = {};
module.exports = function(app) {
	try {
		for (var method in API) {
			restFul[method] = {};
			for (var handle in API[method]) {
				restFul[method][handle] = require('../api/' + API[method][handle])(app);
			}
		}
	} catch (e) {
		console.log(e);
	}
	return restFul;
};
