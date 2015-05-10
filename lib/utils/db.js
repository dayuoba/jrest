var isEmpty = require('lodash/lang').isEmpty;
var connection = require('./lib/connection');
var CRUDInit = require('./lib/crud.js');
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
			return cache[collection];
		} else {
			cache[collection] = mongodb.collection(collection);
			CRUDInit(cache[collection]);
			return cache[collection];
		}
	} else {
		return mongodb;
	}
}