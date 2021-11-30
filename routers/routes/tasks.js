const express = require("express");
const tasksRouter = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const {
  addTask, 
  getTodos,
  getTodo,
//   getCompletedTodos,
//   editTask,
//   removeTask,
} = require("../controllers/tasks");


tasksRouter.post("/task",authentication, addTask);
tasksRouter.get("/todos/:id", authentication, getTodos);
tasksRouter.get("/todo/:id", authentication, getTodo);
// tasksRouter.get("/completed/:id", getCompletedTodos);
// tasksRouter.put("/edit/:id/:task", editTask);
// tasksRouter.delete("/todo/:id/:task", removeTask);

module.exports =  tasksRouter ;
