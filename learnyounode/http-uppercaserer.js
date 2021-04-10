'use strict ';
import http from 'http';
// import map from 'through2-map';

const PORT = process.argv[2];

const server = http.createServer((req, res) => {
	if (req.method !== 'POST') return res.end();

	// 1st-METHOD
	req.on('data', (chunk) => {
		res.write(chunk.toString().toUpperCase());
	});

	req.on('end', () => {
		return res.end();
	});

	// 2nd-METHOD
	// req
	// 	.pipe(
	// 		map(function (chunk) {
	// 			return chunk.toString().toUpperCase();
	// 		})
	// 	)
	// 	.pipe(res);
});

server.listen(PORT);
