var appUtil = module.exports = {
	application: {}
};

appUtil.init = function(app) {
	this.application = app;
	console.log(app)
	app
		.init()
		.loadUtils()
		.loadComponents();
	return this;
};

appUtil.run = function() {
	this.application.run();
};