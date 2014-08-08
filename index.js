var parser = require('apis-parser');

module.exports = function(app,prefix){
	app.get(prefix +'/:word', function(req, res) {
		return res.status(502).json({
			results: [], type: '',
			error: "This API endpoint has been temporarily disabled, due to changes in markup at the remote location. Feel free to contribute!",
			moreinfo: "https://github.com/kristjanmik/apis/issues/96"
		});
	});

	app.get(prefix, function(req, res) {
		return res.status(502).json({
			results: [], type: '',
			error: "This API endpoint has been temporarily disabled, due to changes in markup at the remote location. Feel free to contribute!",
			moreinfo: "https://github.com/kristjanmik/apis/issues/96"
		});
	});
}