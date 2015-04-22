//take a simple auth secret 
var auth = module.exports = function(url, res) {
	if (!url.query || !url.query.taken || url.query.taken !== 'secret') {
		return false;
	}
	return true;
};