var application = require('./application/application');
var appUtil = require('./application/appUtil');

var jrest = module.exports = {};


jrest.run = function(config) {
	appUtil
		.init(application, config)
		.run();
	setTimeout(function() {
		console.log(application.utils.db().collection('User'))
	}, 1000)
};