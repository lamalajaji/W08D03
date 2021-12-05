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
    default: "61a6013d6215cdf69f4f70bf",
  },
});

const userSchema = mongoose.model("User", usersSchema);

module.exports = userSchema;
