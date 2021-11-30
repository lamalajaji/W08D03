const mongoose = require("mongoose");

////Create users Schema:
const usersSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const usersSchema = mongoose.model("Users", usersSchema);

module.exports = usersSchema;
