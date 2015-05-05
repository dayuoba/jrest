module.exports = function(collection, db) {
	if (!collection.C && !collection.R && !collection.U && !collection.D) {
		//insert wrapper
		collection.C = function(docs, cb) {
			db.idle = false;
			collection.insert(docs, function(err, result) {
				db.idle = true;
				cb(err, result);
			});
		};
		//remove wrapper
		collection.D = function(where, cb) {
			db.idle = false;
			collection.remove(where, function(err, result) {
				db.idle = true;
				cb(err, result);
			});
		};
		//update wrapper
		collection.U = function(where, op, cb) {
			db.idle = false;
			collection.update(where, op, function(err, result) {
				db.idle = true;
				cb(err, result);
			});
		};
		//find wrapper
		collection.R = function(where, attrs, cb) {
			if (attrs && typeof attrs === 'function') {
				cb = attrs;
				attrs = {};
			}
			db.idle = false;
			collection.find(where, attrs).toArray(function(err, result) {
				db.idle = true;
				cb(err, result);
			});
		};
		//findOne wrapper
		collection.RO = function(where, attrs, cb) {
			if (attrs && typeof attrs === 'function') {
				cb = attrs;
				attrs = {};
			}
			db.idle = false;
			collection.findOne(where, attrs, function(err, result) {
				db.idle = true;
				cb(err, result);
			});
		};
		return collection;
	} else {
		return collection;
	}
};