import express from "express";
import bodyParser from "body-parser";

import { SERVER_HOST, SERVER_PORT } from "./config/env.js";
import router from "./routes/index.js";

const server = express();

// Variables
server.set('PORT', SERVER_PORT);
server.set('HOST', SERVER_HOST);

// Middlewares
server.use(bodyParser.json());

// Router
server.use(router);

// Custom
server.start = function() {

	const listeningMessage = () => {
		console.log(`App listening, go to http://${SERVER_HOST}:${SERVER_PORT}`);
	};
	this.listen(SERVER_PORT, listeningMessage);

}

export default server;
