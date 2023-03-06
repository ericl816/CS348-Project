const connection = require("../db.js");

class User {
	constructor(firstName, lastName, email, password) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}

	static async fetchUsers() {
		const sql = "SELECT * FROM users";
		return connection.promise().query(sql);
	}

	static fetchUserById(id) {
		const sql = "SELECT * FROM users WHERE id = ?";
		return connection.promise().query(sql, [id]);
	}

	static fetchUserByEmail(email) {
		const sql = "SELECT * FROM users WHERE email = ?";
		return connection.promise().query(sql, [email]);
	}

	static isValidPassword(password, userPassword) {
		// implement this when adding password hashing feature
		return true;
	}

	static createUser(user) {
		const sql = "INSERT INTO users SET ?";
		return connection.promise().query(sql, [user]);
	}

	static updateUser(id, userData) {
		let sql = "UPDATE users SET ";
		const keys = Object.keys(userData)
		const values = Object.values(userData);

		sql += keys.join(" = ?, ");
		sql += " = ? WHERE id = ?";

		console.log(sql, [...values, id]);
		return connection.promise().query(sql, [...values, id]);
	}

	static deleteUser(id) {
		const sql = "DELETE FROM users WHERE id = ?";
		return connection.promise().query(sql, [id]);
	}
}

module.exports = User;
