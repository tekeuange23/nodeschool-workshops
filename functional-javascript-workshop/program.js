// exercise 1
function upperCaser(input) {
	return input.toUpperCase();
}
module.exports = upperCaser;

//exercice 2
function repeat(operation, num) {
	if (num === 0) return;
	return operation() && exercice2(operation, --num);
}
module.exports = repeat;

// exercice 3
function doubleAll(numbers) {
	return numbers.map((num) => num * 2);
	Array.prototype.map();
}
module.exports = doubleAll;

// exercise 4
function getShortMessages(messages) {
	return messages.filter((msg) => msg.message.length < 50).map((msg) => msg.message);
}
module.exports = getShortMessages;

// exercise 5
function checkUsersValid(goodUsers) {
	const isBelong = (user, userList) => (userList.find((usr) => user.id === usr.id) ? true : false);

	const testAllValid = (users) => {
		// return goodUsers.some((_user) => isBelong(_user, users));

		// return users.every((user) => {
		// 	isBelong(user, goodUsers);
		// });

		return users.every((user) => {
			goodUsers.some((_user) => _user.id > user.id);
		});
	};

	return function allUsersValid(submittedUsers) {
		return testAllValid(submittedUsers);
	};
}
module.exports = checkUsersValid;

// exercise 6

// exercise 7

// exercise 8

// exercise 9

// exercise 10
