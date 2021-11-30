const mongoose = require("mongoose");

////Create users Schema:
const tasksSchema = new mongoose.Schema({
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

const taskSchema = mongoose.model("Task", tasksSchema);

module.exports = taskSchema;
