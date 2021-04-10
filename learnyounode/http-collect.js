'use strict';
const http = require('http');
const { BufferListStream } = require('bl');
const URL = process.argv[2];

// 1st- Method
// http
// 	.get(URL, (res) => {
// 		let data = '';
// 		res.on('data', (chunk) => {
// 			data += chunk;
// 			i++;
// 		});
// 		res.on('end', () => {
// 			console.log(data.length);
// 			console.log(data);
// 		});
// 		res.on('error', (err) => {
// 			console.error(err.message);
// 		});
// 	})
// 	.on('error', (err) => {
// 		console.error(err.message);
// 	});

// 2nd- Method
http.get(URL, (response) => {
	response.pipe(
		BufferListStream((err, data) => {
			if (err) {
				return console.error(err);
			}
			data = data.toString();
			console.log(data.length);
			console.log(data);
		})
	);
});
