module.exports = function(res) {
	res.writeHead('status:404');
	res.end('404 Not Found');
};