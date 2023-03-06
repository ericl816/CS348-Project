module.exports = {
    application: {
        "port": 5001,
    },
    mysql: {
        host:  "localhost",
        user:  "root",
        password:  "password",
        port: 2306,
        database:  "fashiondb",
        connectionLimit: 10,
        multipleStatements: true,
    }
};
