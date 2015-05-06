var connection = require('./lib/connection');
var isEmpty = require('lodash/lang').isEmpty;
var mongodb = {};

connection.connect(connection.config, function handle(err, db) {
	if (err) throw new Error(err);
	mongodb = db;
	console.log('mongodb connected');
});

module.exports = function(collection) {
	if (isEmpty(mongodb)) return console.trace('mongodb unavailable!');
	return collection ? 
			mongodb.collection(collection) :
			mongodb;
}