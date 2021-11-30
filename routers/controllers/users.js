const usersModel = require("./../../db/models/users");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT = Number(process.env.SALT);

const Secret = process.env.SECRET;

//// signUp function
const signUp = async (req, res) => {
  const { email, passowrd, role } = req.body;

  const hashPass = await bcrypt.hash(passowrd, SALT);

  const newUSer = new usersModel({
    email: email.toLowerCase(),
    passowrd: hashPass,
    role,
  });
  newUSer
    .save()
    .then((result) => {
      result.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

////// login function
const login = (req, res) => {
  const { email, passowrd } = req.body;
  const savedEmail = email.toLowerCase();

  usersModel
    .findOne({ email: savedEmail })
    .then(async (result) => {
      if (result) {
        if (result.email == email) {
          const savedPassword = await bcrypt.compare(passowrd, result.passowrd);
          const payload = {
            email,
          };

          if (savedPassword) {
            let token = jwt.sign(payload, Secret);
            res.status(200).json({ result, token });
          } else {
            res.status(400).json("Wrong email or password");
          }
        } else {
          res.status(400).json("Wrong email or password");
        }
      } else {
        res.status(404).json("Email not exist");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

///// get All users function:
const getAllUsers = (req, res) => {
  usersModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

////// delete users function : 
const deleteUser = (req, res) => {
    const {id} = req.params;

  usersModel
    .findOneAndDelete({ _id: id })
    .then(() => {
      res.send("this user has been removed!");
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { signUp, login, getAllUsers, deleteUser };
