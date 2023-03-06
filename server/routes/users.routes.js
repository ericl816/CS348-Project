const usersRouter = require("express").Router();

const {
	getUsers,
	getUserById,
	getUserByEmail,
	isValidPassword
	createUser,
	updateUser,
	deleteUser,
} = require("../controllers/users");

usersRouter.get("/", getUsers);
usersRouter.post("/register", createUser, getUserById);
// TODO: Create user tokens
usersRouter.post("/login", getUserByEmail, isValidPassword);
// TODO: Authenticate user tokens
usersRouter.put("/:id", updateUser, getUserById);
// TODO: Authenticate user tokens
usersRouter.delete("/:id", deleteUser);

module.exports = usersRouter;
