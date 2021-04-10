'use strict';
const Module = require('./mymodule.js');
const DIR = process.argv[2];
const EXT = process.argv[3];

Module(DIR, EXT, (err, files = null) => {
	if (err) return console.error(err);

	files.forEach((file) => {
		console.log(file);
	});
});
