// Import the Mongoose library
const mongoose = require("mongoose");


//schema of the user
const PeopleSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},

		gender: {
			type: String,
			required: true,
			trim: true,
		},
		age: {
			type: Number,
			required: true,
			trim: true,
		},
		mob_num: {
			type: Number,
			required: true,
			trim: true,
		},
	}
);

module.exports = mongoose.model("user", PeopleSchema);