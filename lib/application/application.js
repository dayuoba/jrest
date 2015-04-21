var isArray = require('lodash/lang').isArray;

var application = module.exports = {
	STATUS:null
};

//application API
application.init = function() {
	return this;
};

application.run = function() {
	if (!isArray(this.components)) 
		//TODO
		//return this.utils.appLogger.error('something went wrong when loading components');
		return;
	this.components.forEach(function iterator(component) {
		if (typeof component.init === 'function')
			component.init(this);
		if(typeof components.start === 'function')
			component.start();
	});
	return this;
};

application.loadUtils = function() {
	return this;
};

application.loadComponents = function() {
	return this;
};