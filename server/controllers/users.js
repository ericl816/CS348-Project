const userModel = require("../models/User");

const getUsers = async (req, res, next) => {
	userModel.fetchUsers()
		.then(([users]) => {
			res.json(users);
		})
		.catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
};

const getUserById = async (req, res, next) => {
	let id;
	if (req.params.id) {
		id = req.params.id;
	} else if (req.body.id) {
		id = req.body.id;
	}
	userModel.fetchUserById(id)
		.then(([user]) => {
			if (!user) {
				res.status(404).json({ errorMessage: "User not found" });
			} else {
				if (req.params.id) {
					res.status(200);
				} else if (req.body.id) {
					res.status(201);
				}
				user[0].password = "hidden";
				res.json(user[0]);
			}
		})
		.catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
};

const getUserByEmail = async (req, res, next) => {
	const { email } = req.body;
	userModel.fetchUserByEmail(email)
		.then(([user]) => {
			if (user.length === 0) {
				res.status(404).json({ errorMessage: "User not found" });
			} else {
				req.body.user = user[0];
				next();
			}
		})
		.catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
};

const isValidPassword = async (req, res, next) => {
	const isValid = userModel.isValidPassword(req.body.password, req.body.user.password);
	if (isValid) {
		next();
	} else {
		res.status(400).json({ errorMessage: "User Email or Password is invalid" });
	}
}

const createUser = async (req, res, next) => {
	const { firstName, lastName, email, password, street, city, zipCode } = req.body;
	userModel.createUser({
		firstName,
		lastName,
		email,
		password,
		street,
		city,
		zipCode,
	})
		.then(([data]) => {
			req.body.id = data.insertId;
			next();
		})
		.catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
};

const updateUser = async (req, res, next) => {
	const { id } = req.params;
	const { userData } = req.body;
	userModel.updateUser(id, userData)
		.then(([data]) => {
			if (data.affectedRows === 0) {
				req.status(404).json({ errorMessage: "User not found" });
			}
			next();
		})
		.catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
};

const deleteUser = async (req, res, next) => {
	const { id } = req.params;
	userModel.deleteUser(id)
		.then(([data]) => {
			if (data.affectedRows === 0) {
				res.status(404).json({ errorMessage: "User not found" });
			} else {
				res.sendStatus(204);
			}
		})
		.catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
};

module.exports = {
	getUsers,
	getUserById,
	getUserByEmail,
	isValidPassword,
	createUser,
	updateUser,
	deleteUser,
};
