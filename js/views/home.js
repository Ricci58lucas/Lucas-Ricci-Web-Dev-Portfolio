var catalogLocation = 'https://gc-catalog.consultingsuma.net';

$(document).ready(function () {
	document.getElementById('web-title').innerHTML = 'Lucas Ricci';

	// waits for document to load base promises
	isDocumentReady().then((isReady) => {
		if (!isReady) {
			documentNotReady();
			return;
		}

		const fetchList = {}

		waitForAllPromises(fetchList).then((result) => {
			hideLoadingScreen();
		});
	});
});