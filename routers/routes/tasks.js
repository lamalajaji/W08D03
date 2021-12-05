const express = require("express");
const tasksRouter = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const {
  addTask, 
  getTodos,
  getTodo,
  getCompletedTodos,
  editTask,
  removeTask,
} = require("../controllers/tasks");


tasksRouter.post("/task",authentication, addTask);
tasksRouter.get("/todos", authentication, getTodos);
tasksRouter.get("/todo/:id", authentication,  getTodo);
tasksRouter.get("/completed", authentication, getCompletedTodos);
tasksRouter.put("/edit/:id", authentication,  editTask);
tasksRouter.put("/todo/:id", authentication,  removeTask);

module.exports =  tasksRouter ;
