import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import {
	createUser,
	deleteUser,
	findUser,
	updateUser,
	users,
} from '../controllers/users.js';

const router = express.Router();

//All routes in here are starting with /users
router.get('/', (req, res) => {
	res.send(users);
});

router.post('/', createUser);

router.get('/:id', findUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
