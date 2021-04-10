'use strict';
let sum = 0;
process.argv.forEach((data) => {
	if (parseInt(data)) {
		sum += parseInt(data);
	}
});

console.log(sum);
