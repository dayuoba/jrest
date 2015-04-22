module.exports = function(res) {
	console.log('auth false')
	res.writeHead('status:404');
	res.end('404 Not Found');
};