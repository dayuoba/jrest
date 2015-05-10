//take a simple auth secret 
var auth = module.exports = function(url, res) {
	//TODO deal with /favicon.ico
	if (!url.query || !url.query.token || url.query.token !== 'secret') {
		return false;
	}
	return true;
};