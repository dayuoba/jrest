var isArray = require('lodash/lang').isArray;
var rootdir = require('rootdir');
var fs = require('fs');

var application = module.exports = {
	STATUS: null,
	components: {},
	utils: {}
};

//application API
application.init = function() {
	return this;
};

application.run = function() {
	if (typeof(this.components) !== 'object')
	//TODO
	//return this.utils.appLogger.error('something went wrong when loading components');
		return;
	for (var component in this.components) {
		if (typeof this.components[component].init === 'function') {
			this.components[component].init(this);
		}

		if (typeof this.components[component].start === 'function') {
			this.components[component].start(this);
		}

		if (typeof this.components[component].afterStart === 'function') {
			this.components[component].afterStart(this);
		}
	}
	return this;
};

application.loadUtils = function() {
	var self = this;
	fs.readdirSync(rootdir + 'lib/utils').forEach(function(path) {
		if ((/\.js/g).test(path) && !(/de\_/g).test(path)) {
			var name = path.split('.')[0];
			console.time('load util ' + name + ' ');
			self.utils[name] = require(rootdir + 'lib/utils/' + path);
			console.timeEnd('load util ' + name + ' ');
		}
	});
	return this;
};

application.loadComponents = function() {
	//readdir then requrie components
	var self = this;
	fs.readdirSync(rootdir + 'lib/components').forEach(function(path) {
		if ((/\.js/g).test(path)) {
			var name = path.split('.')[0];
			console.time('load component ' + name + ' ');
			self.components[name] = require(rootdir + 'lib/components/' + path)(self);
			console.timeEnd('load component ' + name + ' ');
		}
	});
	return this;
};