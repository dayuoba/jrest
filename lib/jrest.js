var application = require('./application/application');
var appUtil = require('./application/appUtil');

var jrest = module.exports = {};


jrest.run = function(config) {
	appUtil
		.init(application, config)
		.run();
	setTimeout(function() {
		application.utils.db('User')//.collection('User')
		application.utils.db('User')//.collection('User')
	}, 1000)
};