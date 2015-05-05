var mongodb = require('mongodb');
//TODO: it should be loaded from config file
var config = 'mongodb://localhost:27017/hello';

var connect = mongodb.connect;

var connection = module.exports = {
	config: config,
	connect: connect
};