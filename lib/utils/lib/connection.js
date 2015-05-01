var mongodb = require('mongodb');
//TODO: it should be loaded from config file
var config = {
	host: 'localhost',
	port: 27017,
	db: 'jrest'
}

var connect = mongodb.connect;

var connection = module.exports = {
	config: config,
	connect: connect
};