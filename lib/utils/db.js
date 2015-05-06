var connection = require('./lib/connection');
var isEmpty = require('lodash/lang').isEmpty;
var mongodb = {};
var cache = {};
connection.connect(connection.config, function handle(err, db) {
	if (err) throw new Error(err);
	mongodb = db;
	console.log('mongodb connected');
});

module.exports = function(collection) {
	if (isEmpty(mongodb)) return console.trace('mongodb unavailable!');
	if (collection) {
		if (cache[collection]) {
			console.log('has cache of collection')
			return cache[collection];
		} else {
			console.log('no cache of collection')
			cache[collection] = mongodb.collection(collection);
			return cache[collection];
		}
		
	} else {
		return mongodb;
	}
}