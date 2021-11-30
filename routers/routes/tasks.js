const express = require("express");
const tasksRouter = express.Router();

const {
  addTask, 
  getTodos,
  getTodo,
  getCompletedTodos,
  editTask,
  removeTask,
} = require("../controllers/tasks");


tasksRouter.post("/task/:id", addTask);
// tasksRouter.get("/todos/:id", getTodos);
// tasksRouter.get("/todo/:id", getTodo);
// tasksRouter.get("/completed/:id", getCompletedTodos);
// tasksRouter.put("/edit/:id/:task", editTask);
// tasksRouter.delete("/todo/:id/:task", removeTask);

module.exports = tasksRouter;
