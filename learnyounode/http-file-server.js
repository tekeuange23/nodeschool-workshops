'use strict';
import http from 'http';
import fs from 'fs';
// const http = require('http');
// const fs = require('fs');

const PORT = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer((req, res) => {
	const file = fs.createReadStream(fileLocation);
	res.writeHead(200, { 'content-type': 'text/plain' });
	file.pipe(res);
});
server.listen(PORT);
