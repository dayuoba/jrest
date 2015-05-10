var http = require('http');
var requestHandle = require('./lib/requestHandle.js');

var httpServer = module.exports = function(app) {
	var httpServer = {
		STATUS: 0
	};
	//createServer with `http` module
	httpServer.init = function(app) {
		var reqHandler = requestHandle(app);
		this.server = http.Server(reqHandler);
		this.STATUS = 1;
	};
	//listen port from config file
	httpServer.start = function(app) {
		this.server.listen(app.config.HTTP_PORT);
		this.STATUS = 2;
	};

	httpServer.afterStart = function(app) {
		console.log('http server listening on 8080');
		this.STATUS = 3;
	};

	httpServer.stop = function(app) {
		this.server.close();
		this.STATUS = 0;
		//return this;
	};

	return httpServer;
}