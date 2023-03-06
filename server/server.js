require("dotenv").config();

const express = require("express");
const cors = require("cors");
const clientConfig = require('./config/default').application;
const router = require("./routes");

const app = express();

const corsOptions = {
	optionsSuccessStatus: 200,
	methods: "GET, POST, PUT, DELETE, OPTIONS",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(clientConfig.port, () => {
	console.log(`Server is listening on port ${clientConfig.port}`);
});
