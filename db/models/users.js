const mongoose = require("mongoose");

////Create users Schema:
const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passowrd: {
    type: String,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
});

const userSchema = mongoose.model("User", usersSchema);

module.exports = userSchema;
