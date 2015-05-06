var restfulServer = require('./lib/jrest');
var config = require('./config/config.json');

restfulServer.run(config);

process.on('uncaughtException', handleUncaughtException);

function handleUncaughtException(err) {
	//TODO
	//restfulServer.application.NElogger.error(err);
	console.log(err);
}


