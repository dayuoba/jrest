var application = require('./application/application');
var appUtil = require('./application/appUtil');

var jrest = module.exports = {};

jrest.run = function() {
	appUtil
		.init(application)
		.run();
};