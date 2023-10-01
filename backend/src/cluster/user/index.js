import mongoose from "mongoose";

import { generateUriConnection } from "../config.js";
import { permissionSchema, userSchema } from "./schemas.js";

const uriConnection = generateUriConnection("user");

const connection = mongoose.createConnection(uriConnection);
const models = {
	User: connection.model("User", userSchema),
	Permission: connection.model("Permission", permissionSchema)
}

export default {
	connection,
	models
}
