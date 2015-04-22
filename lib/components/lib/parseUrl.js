var parseUrl = module.exports = function(req) {
	// console.log(req);
	var url = req.url.split('?');
	console.log(url)
	var parsedUrl = {
		method: req.method,
		path: url[0],
		query: parseQuery(url[1])
	};
	return parsedUrl;
};

function parseQuery(query) {
	if (!query) return 0;
	var keyvalues = query.split('&');
	var parsedQuery = {};
	keyvalues.forEach(function(kv) {
		var kv = kv.split('=');
		parsedQuery[kv[0]] = kv[1];
	});
	return parsedQuery;
}