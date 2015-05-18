var restfulServer = require('./lib/jrest');
var config = require('./config/config.json');

restfulServer.run(config);

process.on('uncaughtException', handleUncaughtException);

process.on('exit', function() {
	console.log('process exited');
	//register atExit() here
});

function handleUncaughtException(err) {
	//TODO
	//restfulServer.application.NElogger.error(err);
	console.log(err.stack);
	process.exit(0)
	
}


