// exercise 1
function upperCaser(input) {
	return input.toUpperCase();
}

//exercice 2
function repeat(operation, num) {
	if (num === 0) return;
	return operation() && exercice2(operation, --num);
}
function doubleAll(numbers) {
	numbers = numbers.map((num) => num * 2);
	return numbers;
}

module.exports = doubleAll;
module.exports = repeat;
module.exports = upperCaser;
