var connection = require('./lib/connection');

connection.connect(connection.config, function handle(err) {
	if (err) throw err;
	console.log('mongodb connected');
});