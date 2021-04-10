'use strict';
const http = require('http');
const URL = process.argv[2];

http
	.get(URL, (res) => {
		let data = '';

		res.on('data', (chunk) => {
			data += chunk;
			console.log(chunk.toString());
		});

		res.on('end', () => {
			// console.log(data);
		});

		res.on('error', (err) => {
			console.error(err.message);
		});
	})
	.on('error', (err) => {
		console.error(err.message);
	});

// http.get(URL, (response) => {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
//   }).on('error', console.error)
