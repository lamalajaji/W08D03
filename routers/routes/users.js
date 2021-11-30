
const express = require("express");
const usersRouter = express.Router();

const { signUp, login, getAllUsers } = require("../controllers/users");

usersRouter.post("/register", signUp);
usersRouter.post("/login", login);
usersRouter.get("/users", getAllUsers);


module.exports = usersRouter;

