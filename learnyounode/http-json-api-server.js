'use strict ';
import http from 'http';
import { URL } from 'url';
const PORT = process.argv[2];

let date, parseURL, responseData;
function getIsoDate(requestUrl) {
	parseURL = new URL(requestUrl, 'http://localhost');
	const URLSearchParamsIterator = parseURL.searchParams;
	if (URLSearchParamsIterator.has('iso')) {
		const iso = URLSearchParamsIterator.get('iso');
		return new Date(iso);
	} else {
		responseData = null;
	}
	return null;
}

const server = http.createServer((req, res) => {
	// 1-INIT VARIABLES FOR EACH REQUEST
	responseData = null;
	parseURL = new URL(req.url, 'http://localhost');

	// 2-PARSE URL & EXTRACT DATA**********************************************************
	// 1st::METHOD
	if (req.method === 'GET' && parseURL.pathname === '/api/parsetime') {
		date = getIsoDate(req.url);
		responseData = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds(),
		};
	} else if (req.method === 'GET' && parseURL.pathname === '/api/unixtime') {
		date = getIsoDate(req.url);
		responseData = { unixtime: +date };
	}

	// 2nd::METHOD with regex
	// const time = new Date(parseURL.searchParams.get('iso'));
	// if (/^\/api\/parsetime/.test(req.url)) {
	// 	responseData = {
	// 		hour: time.getHours(),
	// 		minute: time.getMinutes(),
	// 		second: time.getSeconds(),
	// 	};
	// } else if (/^\/api\/unixtime/.test(req.url)) {
	// 	responseData = { unixtime: time.getTime() };
	// }
	// **********************************************************************************

	// 3-RETURN RESPONSE
	if (responseData) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(responseData));
	} else {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify({ error: 404 }));
		res.end();
	}
});

server.listen(PORT);
