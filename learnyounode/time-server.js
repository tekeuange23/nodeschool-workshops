'use strict';
import net from 'net';
const PORT = process.argv[2];

// MY SOLUTION
// const date = new Date();
// const formattedDate = `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()} ${date.getHours()}:0${date.getMinutes()}
// `;

// const server = net.createServer((socket) => {
// 	const date = new Date();

// 	socket.write(formattedDate, 'utf-8', (err) => {
// 		if (err) console.log(err);
// 	});

// 	socket.end('', () => {});
// });
// server.listen(PORT);

//CORRECTION
const zeroFill = (num) => {
	return (num < 10 ? '0' : '') + num;
};

const now = () => {
	const d = new Date();
	return (
		d.getFullYear() + '-' + zeroFill(d.getMonth() + 1) + '-' + zeroFill(d.getDate()) + ' ' + zeroFill(d.getHours()) + ':' + zeroFill(d.getMinutes())
	);
};

const server = net.createServer(function (socket) {
	socket.end(now() + '\n');
});

server.listen(Number(PORT));
