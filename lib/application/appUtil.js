var appUtil = module.exports = {
	application: {}
};


appUtil.init = function(app, config) {
	this.application = app;
	app.config = config;
	app
		.init()
		.loadUtils()
		.loadComponents();
	return this;
};

appUtil.run = function() {
	this.application.run();
};