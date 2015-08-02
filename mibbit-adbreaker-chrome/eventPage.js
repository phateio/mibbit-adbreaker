chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		if (details.url.match(/^https:\/\/s3\.amazonaws\.com\/mibbit\/widgetclient_[0-9]+_gz.js$/i) != null)
			return {redirectUrl: 'https://phateio.github.io/mibbit-adbreaker/widgetclient_xxxx_gz.js'};
		if (details.url.match(/^https:\/\/s3\.amazonaws\.com\/s3\.mibbit\.com\/settings\/[A-Za-z0-9]+\.js$/i) != null)
			return {redirectUrl: 'https://phateio.github.io/mibbit-adbreaker/56ac64c1.js'};
	},
	{urls: ['https://s3.amazonaws.com/*.js']},
	['blocking']);
