const express = require("express");
const usersRouter = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization")

const {
  signUp,
  login,
  getAllUsers,
  deleteUser,
} = require("../controllers/users");

usersRouter.post("/register", signUp);
usersRouter.post("/login", login);
usersRouter.get("/users", authentication, authorization, getAllUsers);
usersRouter.delete("/remove/:id", authentication, authorization, deleteUser);


module.exports = usersRouter;

