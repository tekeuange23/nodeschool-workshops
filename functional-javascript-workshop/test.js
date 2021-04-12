var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
var usrs = [{ id: 1 }];
const isBelong = (user, userList) => (userList.find((usr) => user.id === usr.id) ? true : false);

const testAllValid = (users) => {
	// return goodUsers.some((_user) => isBelong(_user, users));

	return users.every((user) => {
		isBelong(user, goodUsers);
	});

	// return users.every((user) => {
	// 	goodUsers.some((_user) => _user.id === user.id);
	// });
};

console.log(testAllValid(usrs));
// console.log(isBelong({ id: 1 }, goodUsers));
