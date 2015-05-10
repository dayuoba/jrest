module.exports = function(collection, db) {
	if (!collection.C && !collection.R && !collection.U && !collection.D) {
		//insert wrapper
		collection.C = function(docs, cb) {
			collection.insert(docs, function(err, result) {
				cb(err, result);
			});
		};
		//remove wrapper
		collection.D = function(where, cb) {
			collection.remove(where, function(err, result) {
				cb(err, result);
			});
		};
		//update wrapper
		collection.U = function(where, op, cb) {
			collection.update(where, op, function(err, result) {
				cb(err, result);
			});
		};
		//find wrapper
		collection.R = function(where, attrs, cb) {
			if (attrs && typeof attrs === 'function') {
				cb = attrs;
				attrs = {};
			}
			collection.find(where, attrs).toArray(function(err, result) {
				cb(err, result);
			});
		};
		//findOne wrapper
		collection.RO = function(where, attrs, cb) {
			if (attrs && typeof attrs === 'function') {
				cb = attrs;
				attrs = {};
			}
			collection.findOne(where, attrs, function(err, result) {
				cb(err, result);
			});
		};
		return collection;
	} else {
		return collection;
	}
};