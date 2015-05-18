var mongodb = require('mongodb');
var should = require('should');

describe('mongodb connection', function() {
	it('it should connect whitout error', function(done) {
		mongodb.connect('mongodb://localhost:27017', function listener(err, db) {
			should.not.exists(err);
			// console.log(err)
			done();
		});
	});
	it('it should connect whitout error', function(done) {
		mongodb.connect('mongodb://localhost:27017', function listener(err, db) {
			should.not.exists(err);
			// console.log(err)
			done();
		});
	});
	it('it should connect whitout error', function(done) {
		mongodb.connect('mongodb://localhost:27017', function listener(err, db) {
			should.not.exists(err);
			// console.log(err)
			done();
		});
	});
	it('it should connect whitout error', function(done) {
		mongodb.connect('mongodb://localhost:27017', function listener(err, db) {
			should.not.exists(err);
			// console.log(err)
			done();
		});
	});
	
	it('should wait for 10s', function(done) {
		this.timeout(11000);
		setTimeout(function() {
			done();
		}, 10000);
	});
});