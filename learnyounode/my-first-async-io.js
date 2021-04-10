'use strict';
const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, (err, buffer) => {
	if (err) {
		return console.log(err);
	}

	const lines = buffer.toString().split('\n').length - 1;
	console.log(lines);
});
