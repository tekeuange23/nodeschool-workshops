'use strict';
const fs = require('fs');
const path = require('path');
const DIR = process.argv[2];
const EXT = '.' + process.argv[3];

const printFileByExt = (directory, extension) => {
	fs.readdir(directory, (err, buffer) => {
		if (err) return console.log(err);

		buffer.forEach((file) => {
			if (path.extname(file) === extension) {
				console.log(file);
			}
		});
	});
};

printFileByExt(DIR, EXT);
