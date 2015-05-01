var connection = require('./lib/connection');
var connectionPool = {
	connections: 10,
	clients: [],
}
connectionPool.db = function() {
	var idleClient = checkIdleClient(this.clients);
	return idleClient;
}

function createInstances(pool) {
	//iterate pool.connections then
	//var dbinstance = db.connection()
	//build dbinstance
	//pool.clients.push(dbinstance)
	return pool;
}

function checkIdleClient(clients) {
	clients.forEach(function(client) {
		if (client.idle) {
			return client;
		}
	});
	return null;
}

module.exports = function(connectionPool){
	return createInstances(connectionPool);
}(connectionPool);