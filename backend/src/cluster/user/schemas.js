import { Schema } from "mongoose";

export const userSchema = new Schema({
	name: String,
	email: String
});

export const permissionSchema = new Schema({
	name: String
});
