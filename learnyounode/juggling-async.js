'use strict';
import http from 'http';
import { BufferListStream } from 'bl';

// MY SOLUTION
// const URL1 = process.argv[2],
// 	URL2 = process.argv[3],
// 	URL3 = process.argv[4];

// http.get(URL1, (response1) => {
// 	response1.pipe(
// 		BufferListStream((err, data1) => {
// 			if (err) console.error(err);

// 			http.get(URL2, (response2) => {
// 				response2.pipe(
// 					BufferListStream((err, data2) => {
// 						if (err) console.error(err);

// 						http.get(URL3, (response3) => {
// 							response3.pipe(
// 								BufferListStream((err, data3) => {
// 									if (err) console.error(err);

// 									console.log(data1.toString());
// 									console.log(data2.toString());
// 									console.log(data3.toString());
// 								})
// 							);
// 						});
// 					})
// 				);
// 			});
// 		})
// 	);
// });

// CORRECTION
const results = [];
let count = 0;

const printResults = () => {
	for (let i = 0; i < 3; i++) {
		console.log(results[i]);
	}
};
const httpGet = (index) => {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(
			BufferListStream((err, data) => {
				if (err) {
					return console.error(err);
				}

				results[index] = data.toString();
				count++;

				if (count === 3) {
					printResults();
				}
			})
		);
	});
};

for (let i = 0; i < 3; i++) {
	httpGet(i);
}
