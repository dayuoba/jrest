var parseUrl = module.exports = function(req) {
	// console.log(req);
	var url = req.url.split('?');
	console.log(url)
	var parsedUrl = {
		method: req.method,
		path: url[0],
		query: parseQuery(url[1])
	};
	
	console.log(parsedUrl);
	return parsedUrl;
};

function parseQuery(url) {
	return url;
}