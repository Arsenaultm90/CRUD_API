import { v4 as uuidv4 } from 'uuid';

export let users = [];

export const createUser = (req, res) => {
	const user = req.body;

	users.push({ ...user, id: uuidv4() });
	res.send(`User with the username ${user.firstName} added to the database`);
};

export const deleteUser = (req, res) => {
	const { id } = req.params;

	users = users.filter((user) => user.id !== id);
	res.send(`User with the ID: ${id} is deleted from the database`);
};

export const updateUser = (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, age } = req.body;
	console.log(req.body);
	const user = users.find((user) => user.id === id);

	if (firstName) {
		user.firstName = firstName;
	}

	if (lastName) {
		user.lastName = lastName;
	}

	if (age) {
		user.age = age;
	}
};

export const findUser = (req, res) => {
	const { id } = req.params;

	const foundUser = users.find((user) => user.id === id);
	res.send(foundUser);
};
