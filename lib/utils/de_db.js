var isEmpty = require('lodash/lang').isEmpty;
var connection = require('./lib/connection');
var CRUD = require('./lib/crud');
var connectionPool = {
	connections: 2,
	clients: [],
}
//TODO implemet the reasonable allocation of database instance
connectionPool.getClient = function(collection) {
	if (isEmpty(this.clients)) {
		console.log('no db client can be used now');
		return false;
	} 
	var idleClient = checkIdleClient(this.clients);
	return collection ?
		   CRUD(idleClient.collection(collection), idleClient) :
		   idleClient;
}

module.exports = function(connectionPool){
	return createInstances(connectionPool);
}(connectionPool);

function createInstances(pool) {
	for (var i = 0; i < pool.connections; i ++) {
		connection.connect(connection.config, function(err, db) {
			if (err) {
				console.log(err);
				return console.log('db client instance was created incorrectly');
			}
  			db.idle = true;
  			pool.clients.push(db);
		});
	}
	return pool;
}

function checkIdleClient(clients) {
	for (var i = 0; i < clients.length; i ++) {
		if (clients[i].idle) {
			return clients[i];
		}
	}
	return null;
}