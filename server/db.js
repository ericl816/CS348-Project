const mysql = require('mysql2');

const mysqlConfig = require('./config/default').mysql;

const connection = mysql.createPool(mysqlConfig);

module.exports = connection;
