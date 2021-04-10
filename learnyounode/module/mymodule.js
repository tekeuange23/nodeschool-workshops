'use strict';
const fs = require('fs');
const path = require('path');

module.exports = (dirName, extension, callback) => {
	fs.readdir(dirName, 'utf-8', (err, list) => {
		if (err) return callback(err);

		list = list.filter(function (file) {
			return path.extname(file) === `.${extension}`;
		});

		callback(null, list);
	});
};
